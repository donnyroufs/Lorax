import Sequelize from "sequelize";
import Controller from "./Controller";
import models from "../models/index";
import response from "../../utils/sendResponse";
import urlSlug from "url-slug";

const op = Sequelize.Op;

class QuestionController extends Controller {
  constructor(model) {
    super(model);

    this.findById = this.findById.bind(this);
    this.search = this.search.bind(this);
    this.byGuild = this.byGuild.bind(this);
  }

  async search(req, res) {
    const { query } = req;

    try {
      const data = await models.Question.search(
        query.question,
        res.locals.guildId
      );
      response(res, 200, data);
    } catch (err) {
      console.log(err);
      response(res, 400, err, false);
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const data = await this.model.findByPk(id, {
        include: [
          models.Answer,
          models.User,
          {
            model: models.Answer,
            include: models.User
          }
        ]
      });
      response(res, 200, data);
    } catch (err) {
      console.log(err);
      response(res, 500, data);
    }
  }

  // @NOTE: No idea how to get the data by query, so using js instead.
  // Tried [op.is]: null, but then it just returns an empty array.
  // doing [op.not]: null returns all the questions with answers..
  async byGuild(req, res) {
    try {
      const data = await this.model.findAll({
        where: {
          GuildId: res.locals.guildId
        },
        include: [models.Answer, models.User]
      });

      const filteredData = data.filter(x => x.Answers.length <= 0);
      response(res, 200, filteredData);
    } catch (err) {
      response(res, 400, err, false);
    }
  }

  async create(req, res) {
    const slug = urlSlug(req.body.title);
    try {
      const data = await this.model.create({
        ...req.body,
        slug
      });
      response(res, 201, data);
    } catch (err) {
      response(res, 400, err, false);
    }
  }
}

export default new QuestionController(models.Question);
