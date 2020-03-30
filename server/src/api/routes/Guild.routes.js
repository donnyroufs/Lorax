import { Router } from "express";
import controller from "../controllers/Guild.controller";

const router = Router();

router.get("/", controller.all);
router.get("/:id", controller.getById);
router.post("/", controller.create);

router.get("/overview/:slug", controller.getOverviewBySlug);

export default router;
