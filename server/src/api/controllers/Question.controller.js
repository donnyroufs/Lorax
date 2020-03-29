import Controller from "./Controller";
import models from "../models/index";
import response from "../../utils/sendResponse";

class QuestionController extends Controller {
  constructor(model) {
    super(model);
  }

  async create(req, res) {
    try {
      // @NOTE: UserId, and GuildId are capitalized!!!
      const data = await this.model.create({
        ...req.body
      });
      response(res, 201, data);
    } catch (err) {
      response(res, 400, err, false);
    }
  }
}

export default new QuestionController(models.Question);
