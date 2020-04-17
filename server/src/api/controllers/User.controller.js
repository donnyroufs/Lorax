import Controller from "./Controller";
import models from "../models/index";
import response from "../../utils/sendResponse";

class UserController extends Controller {
  constructor(model) {
    super(model);

    this.getQuestionsById = this.getQuestionsById.bind(this);
  }

  async getQuestionsById(req, res) {
    const { id } = req.params;
    try {
      const data = await this.model.findByPk(id, {
        include: [
          models.Question,
          {
            model: models.Question,
            include: models.Answer,
          },
        ],
      });
      response(res, 200, data);
    } catch (err) {
      response(res, 500, data);
    }
  }
}

export default new UserController(models.User);
