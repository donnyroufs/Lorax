import Controller from "./Controller";
import models from "../models/index";

class GuildController extends Controller {
  constructor(model) {
    super(model);
  }

  async _create({ id, name, memberCount, icon }) {
    try {
      const data = await this.model.create({
        id,
        name,
        avatar: icon,
        memberCount
      });
      return console.log(data);
    } catch (err) {
      throw err;
    }
  }

  async _delete({ id }) {
    try {
      const data = await this.model.destroy({
        where: {
          id
        }
      });
      return console.log(data);
    } catch (err) {
      throw err;
    }
  }
}

export default new GuildController(models.Guild);
