import Controller from "./Controller";
import models from "../models/index";

class QuestionController extends Controller {
  constructor(model) {
    super(model);
  }
}

export default new QuestionController(models.Question);
