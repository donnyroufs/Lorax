import { Router } from "express";
import controller from "../controllers/Answer.controller";
import slugToId from "../../utils/slugToId";

const router = Router();

router.get("/", controller.all);
router.post("/", controller.create);

router.get("/:id", slugToId, controller.byGuild);

export default router;
