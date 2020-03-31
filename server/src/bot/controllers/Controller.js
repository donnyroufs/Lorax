import models from "../../api/models/index";
import urlSlug from "url-slug";

class Controller {
  constructor() {
    this.findOrCreate = this.findOrCreate.bind(this);
  }

  async findOrCreate({ id, username }, avatar) {
    try {
      const data = await models.User.findOrCreate({
        where: {
          id,
          username,
          avatar
        }
      });
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export default Controller;
