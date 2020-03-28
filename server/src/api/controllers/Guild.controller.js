import Controller from "./Controller";
import models from "../models/index";

class GuildController extends Controller {
  constructor(model) {
    super(model);
  }
}

export default new GuildController(models.guild);
