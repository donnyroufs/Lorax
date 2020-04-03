import { Router } from "express";
import controller from "../controllers/User.controller";

const router = Router();

router.get("/", controller.all);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.put("/", controller.update);

export default router;
