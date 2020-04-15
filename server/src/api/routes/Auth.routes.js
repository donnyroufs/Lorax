import { Router } from "express";
import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import controller from "../controllers/Auth.controller";

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
      process.nextTick(async () => {
        // Create a profile if not exists
        console.log("profile: ", profile);
        console.log("accessToken: ", accessToken);
        console.log("refreshToken: ", refreshToken);
        // Check if the user exists in our database, else create the user.
        await controller.findOrCreate(profile);
        return done(null, profile);
      });
    }
  )
);

export default router;
