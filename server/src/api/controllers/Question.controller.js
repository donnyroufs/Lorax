import Controller from "./Controller";
import models from "../models/index";
import response from "../../utils/sendResponse";
import urlSlug from "url-slug";

class QuestionController extends Controller {
  constructor(model) {
    super(model);
  }

  async create(req, res) {
    const slug = urlSlug(req.body.title);
    try {
      const data = await this.model.create({
        ...req.body,
        slug
      });
      response(res, 201, data);
    } catch (err) {
      response(res, 400, err, false);
    }
  }
}

export default new QuestionController(models.Question);
