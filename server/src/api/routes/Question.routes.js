import { Router } from "express";
import controller from "../controllers/Question.controller";
import slugToId from "../../utils/slugToId";

const router = Router();

router.get("/search/:id", slugToId, controller.findById);
router.get("/search", slugToId, controller.search);
router.get("/", controller.all);
router.post("/", controller.create);
router.get("/:id", slugToId, controller.byGuild);
export default router;
