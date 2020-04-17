import models from "../models/index";
import jwt from "jsonwebtoken";

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

  generateToken(type, data, options = { expiresIn: "7d" }) {
    if (type === "ACCESS") {
      return jwt.sign({ ...data }, process.env.ACCESS_TOKEN_SECRET, {
        ...options,
      });
    }
    if (type === "REFRESH") {
      return jwt.sign({ ...data }, process.env.REFRESH_TOKEN_SECRET, {
        ...options,
      });
    }
  }
}

export default new AuthController(models.User);
