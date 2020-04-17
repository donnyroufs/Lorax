import models from "../models/index";
import jwt from "jsonwebtoken";

class AuthController {
  constructor(model) {
    this.model = model;
    this.oneWeek = 7 * 24 * 3600 * 1000;

    this.signIn = this.signIn.bind(this);
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

  async signIn(req, res) {
    const { id } = req.user;
    // Generate Access Token
    const accessToken = this.generateToken("ACCESS", {
      id,
      accessToken: req.accessToken,
    });

    const refreshToken = this.generateToken("REFRESH", {
      id,
      refreshToken: req.refreshToken,
    });

    // Create cookie for the refresh token and send along with the redirect
    this.createCookie(res, refreshToken);

    // redirect to client with the accessToken
    res.redirect(`${process.env.BASE_PATH}?accessToken=${accessToken}`);
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

  createCookie(res, refreshToken) {
    res.cookie("rtk", refreshToken, {
      expires: new Date(Date.now() + this.oneWeek),
      secure: false, // https
      httpOnly: true,
    });
  }
}

export default new AuthController(models.User);
