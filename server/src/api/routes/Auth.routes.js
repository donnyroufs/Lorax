import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy as DiscordStrategy } from "passport-discord";
import controller from "../controllers/Auth.controller";
import refresh from "passport-oauth2-refresh";

const router = Router();

const scopes = ["identify"];

router.get("/", passport.authenticate("discord", { scope: scopes, session: false }));
router.get("/redirect", passport.authenticate("discord", { failureRedirect: "/", session: false }), controller.signIn);
router.get("/me", controller.getProfile);
router.get("/logout", controller.signOut);

// @NOTE: refresh.requestNewAccessToken("discord") // from passport-oauth2-refresh

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
