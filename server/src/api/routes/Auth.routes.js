import { Router } from "express";
import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";

const router = Router();

const scopes = ["identify"];

router.get(
  "/",
  passport.authenticate("discord", { scope: scopes, session: false }),
  (req, res) => {
    res.send("hello world");
  }
);

router.get(
  "/redirect",
  passport.authenticate("discord", { failureRedirect: "/", session: false }),
  (req, res) => {
    // redirect to client, need to send cookies
    res.redirect(process.env.BASE_PATH);
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
      process.nextTick(() => {
        // Create a profile if not exists
        console.log(profile);
        return done(null, profile);
      });
    }
  )
);

export default router;
