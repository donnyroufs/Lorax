import Controller from "./Controller";
import models from "../models/index";
import response from "../../utils/sendResponse";
import urlSlug from "url-slug";

class GuildController extends Controller {
  constructor(model) {
    super(model);
  }

  // Difference is that it includes the question association
  async all(_, res) {
    try {
      const data = await this.model.findAll({
        include: [{ model: models.Question }]
      });

      response(res, 200, data);
    } catch (err) {
      response(res, 404, err, false);
    }
  }
  /* Methods that are not related to the rest api */

  async _create({ id, name, memberCount }, icon) {
    const slug = urlSlug(name);

    try {
      const data = await this.model.create({
        id,
        name,
        avatar: icon,
        memberCount,
        slug
      });
      return console.log(data);
    } catch (err) {
      throw err;
    }
  }

  async _update({ id, name, memberCount }, icon) {
    const slug = urlSlug(name);

    try {
      const [_, data] = await this.model.update(
        { name, memberCount, avatar: icon, slug },
        { where: { id: id }, returning: true, plain: true }
      );
      if (data === 0) throw err;
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

  // @TODO: split generate function
  generateAvatar(icon) {}
}

export default new GuildController(models.Guild);
