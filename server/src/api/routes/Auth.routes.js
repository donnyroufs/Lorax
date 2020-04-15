import { Router } from "express";
import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";

const router = Router();

const scopes = ["identify"];

router.get(
  "/",
  passport.authenticate("discord", { scope: scopes }),
  (req, res) => {
    res.send("hello world");
  }
);

router.get(
  "/redirect",
  passport.authenticate("discord", { failureRedirect: "/" }),
  (req, res) => {
    res.send("This is the callback endpoint");
  }
);

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: scopes,
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

export default router;
