import models from "../models/index";

class AuthController {
  constructor(model) {
    this.model = model;
  }

  async findOrCreate({ id, username, avatar: _avatar }) {
    const avatar = this.makeAvatarURL(id, _avatar);
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

  makeAvatarURL(id, avatar) {
    return `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;
  }
}

export default new AuthController(models.User);
