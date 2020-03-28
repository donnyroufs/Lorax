import Controller from "./Controller";
import models from "../models/index";

class AnswerController extends Controller {
  constructor(model) {
    super(model);
  }
}

export default new AnswerController(models.answer);
