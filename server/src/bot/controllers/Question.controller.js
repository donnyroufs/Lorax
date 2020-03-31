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
      console.log(data);
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

  async findQuestions(guildId, question) {
    try {
      // @REFACTOR: Not sure how to implement this as of yet.
      // @RESOURCE: https://medium.com/riipen-engineering/full-text-search-with-sequelize-and-postgresql-3572cb3093e7
      const data = await models.Question.findAll({
        attributes: ["messageUrl", "title", "slug"],
        include: [
          {
            model: models.Guild,
            attributes: ["slug"]
          }
        ],
        where: {
          GuildId: guildId,
          title: {
            [Op.iLike]: `%${question}%`
          }
        }
      });

      console.log(data);
    } catch (err) {
      throw err;
    }
  }

  // @FEATURE: Is not setup yet.
  getQuestionUrl(slug, guildSlug) {
    return `http://localhost:3000/${guildSlug}/search?=${slug}`;
  }
}

export default new QuestionController(models, urlSlug);
