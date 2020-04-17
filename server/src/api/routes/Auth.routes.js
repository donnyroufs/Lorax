import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy as DiscordStrategy } from "passport-discord";
import controller from "../controllers/Auth.controller";
import fetch from "node-fetch";
import sendResponse from "../../utils/sendResponse";
import refresh from "passport-oauth2-refresh";
import FormData from "form-data";

const router = Router();

const BASE_URL = `https://discordapp.com/api`;
const scopes = ["identify"];

router.get("/", passport.authenticate("discord", { scope: scopes, session: false }));
router.get("/redirect", passport.authenticate("discord", { failureRedirect: "/", session: false }), controller.signIn);
router.get("/me", controller.getProfile);

router.get("/logout", async (req, res) => {
  // Clear session
  req.profile = null;
  req.accessToken = null;
  req.refreshToken = null;

  // Get token
  const _accessToken = req.headers["authorization"];
  const accessToken = _accessToken.slice(7, _accessToken.length);
  // Decode
  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

  if (!decoded) {
    sendResponse(res, 401, {}, false);
  }

  const decodedCookie = jwt.verify(req.cookies.rtk, process.env.REFRESH_TOKEN_SECRET);

  const formData = new FormData();

  formData.append("client_id", process.env.CLIENT_ID);
  formData.append("client_secret", process.env.CLIENT_SECRET);
  formData.append("token", decodedCookie.refreshToken);

  try {
    await fetch(`${BASE_URL}/oauth2/token/revoke`, {
      method: "POST",
      body: formData,
    });

    sendResponse(res, 200, {});
  } catch (err) {
    sendResponse(res, 401, err.message, false);
  }
});

// @TODO
router.get("/refresh", async (req, res) => {
  // Get refreshToken
  if (!req.cookies.rtk) {
    sendResponse(res, 404, {}, false);
  }

  const decoded = jwt.verify(req.cookies.rtk, process.env.REFRESH_TOKEN_SECRET);

  if (!decoded) {
    sendResponse(res, 401, {}, false);
  }

  refresh.requestNewAccessToken("discord", decoded.refreshToken, (err, accessToken, refreshToken) => {
    if (err) throw err;
    console.log("access token: ", accessToken);
    console.log("new refreshToken? :", refreshToken);
  });
});

const strategy = new DiscordStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: scopes,
    passReqToCallback: true,
  },
  (req, accessToken, refreshToken, profile, done) => {
    process.nextTick(async () => {
      req.refreshToken = refreshToken;
      req.accessToken = accessToken;
      req.user = profile;
      // Check if the user exists in our database, else create the user.
      await controller.findOrCreate(profile);
      return done(null, profile);
    });
  }
);

passport.use(strategy);
refresh.use(strategy);

export default router;
