import Controller from "./Controller";
import models from "../models/index";
import response from "../../utils/sendResponse";
import Sequelize from "sequelize";

const op = Sequelize.Op;

class AnswerController extends Controller {
  constructor(model) {
    super(model);

    this.byGuild = this.byGuild.bind(this);
  }

  // async byGuild(req, res) {
  //   try {
  //     const data = await models.Question.findAll({
  //       where: {
  //         GuildId: res.locals.guildId,
  //       },
  //       include: {
  //         model: models.Answer,
  //         where: {
  //           id: {
  //             [op.not]: null,
  //           },
  //         },
  //         include: [models.User],
  //       },
  //     });
  //     response(res, 200, data);
  //   } catch (err) {
  //     response(res, 400, err, false);
  //   }
  // }

  async byGuild(req, res) {
    try {
      const data = await models.Question.findAll({
        where: {
          GuildId: res.locals.guildId,
        },
        include: [
          models.User,
          models.Answer,
          {
            model: models.Answer,
            include: models.User,
            where: {
              id: {
                [op.not]: null,
              },
            },
          },
        ],
      });

      response(res, 200, data);
    } catch (err) {
      response(res, 400, err, false);
    }
  }
}

export default new AnswerController(models.Answer);
// include: [
//   {
//     model: models.Question,
//     include: [
//       models.Answer,
//       models.User,
//       {
//         model: models.Answer,
//         include: models.User
//       }
//     ]
//   }
// ],
// order: [[models.Question, "createdAt", "DESC"]]
