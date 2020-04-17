import { Strategy as DiscordStrategy } from "passport-discord";
import controller from "../api/controllers/Auth.controller";
import passport from "passport";

export default {
  scopes: ["identify"],
  strategy: new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["identify"],
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
  ),

  setup() {
    passport.use(this.strategy);
  },
};
