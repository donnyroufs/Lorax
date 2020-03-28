import Controller from "./Controller";
import models from "../models/index";

class UserController extends Controller {
  constructor(model) {
    super(model);
  }
}

export default new UserController(models.User);
