import { Router } from "express";
import controller from "../controllers/Guild.controller";
import slugToId from "../../utils/slugToId";

const router = Router();

router.get("/", controller.all);
router.get("/:id", controller.getById);
router.post("/", controller.create);

router.get("/overview/:id", slugToId, controller.getOverview);

export default router;
