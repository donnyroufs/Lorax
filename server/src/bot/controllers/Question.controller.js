import Controller from "./Controller";
import Sequelize from "sequelize";
import models from "../../api/models/index";
import urlSlug from "url-slug";

const Op = Sequelize.Op;

class QuestionController extends Controller {
  constructor() {
    super();
  }

  async getGuildSlug(id) {
    try {
      const data = await models.Guild.findOne({
        where: {
          id
        },
        attributes: ["slug"]
      });
      return data;
    } catch (err) {
      throw err;
    }
  }

  async createQuestion({ title, ...rest }) {
    const slug = urlSlug(title);
    try {
      const data = await models.Question.create({
        ...rest,
        title,
        slug
      });
      return {
        ok: true,
        data
      };
    } catch (err) {
      return {
        ok: false,
        data: err
      };
    }
  }

  async similiarQuestions(question, guildId) {
    try {
      const data = await models.Question.search(question, guildId);
      return {
        ok: true,
        data
      };
    } catch (err) {
      return {
        ok: false,
        data: err
      };
    }
  }

  // @FEATURE: Is not setup yet.
  getQuestionUrl(slug, guildSlug) {
    return `${process.env.BASE_PATH}${guildSlug}/search?=${slug}`;
  }
}

export default new QuestionController(models, urlSlug);
