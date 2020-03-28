import { Router } from "express";
import controller from "../controllers/Guild.controller";

const router = Router();

router.get("/", controller.all);
router.post("/", controller.create);

export default router;
