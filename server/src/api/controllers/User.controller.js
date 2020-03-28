import User from "../models/User.model";
import response from "../../utils/sendResponse";

class UserController {
  static async all(_, res) {
    try {
      const users = await User.findAll();
      response(res, 200, users);
    } catch (err) {
      response(res, 404, users, false);
    }
  }

  static async create(req, res) {
    try {
      const user = await User.create({
        ...req.body
      });
      response(res, 201, user);
    } catch (err) {
      response(res, 400, err, false);
    }
  }

  static async update(req, res) {
    try {
      const [_, user] = await User.update(
        { ...req.body },
        { where: { id: req.body.id }, returning: true, plain: true }
      );
      if (user === 0) response(res, 404, {}, false);
      response(res, 201, user);
    } catch (err) {
      response(res, 400, err, false);
    }
  }
}

export default UserController;
