import { Router } from "express";
import controller from "../controllers/Question.controller";

const router = Router();

router.get("/", controller.all);
router.post("/", controller.create);

export default router;
