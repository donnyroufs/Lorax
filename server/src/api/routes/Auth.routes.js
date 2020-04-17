import { Router } from "express";
import passport from "passport";
import controller from "../controllers/Auth.controller";
import oauth from "../../config/oauth.config";

const router = Router();

router.get("/", passport.authenticate("discord", { scope: oauth.scopes, session: false }));
router.get("/redirect", passport.authenticate("discord", { failureRedirect: "/", session: false }), controller.signIn);
router.get("/me", controller.getProfile);
router.get("/logout", controller.signOut);

// @NOTE: refresh.requestNewAccessToken("discord") // from passport-oauth2-refresh
// @NOTE: refresh.use(strategy)

export default router;
