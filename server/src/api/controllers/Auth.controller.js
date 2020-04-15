import models from "../models/index";

class AuthController {
  constructor(model) {
    this.model = model;
  }

  async findOrCreate({ id, username, avatar }) {
    try {
      const data = await this.model.findOrCreate({
        where: {
          id,
          username,
          avatar,
        },
      });
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthController(models.User);
