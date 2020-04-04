import Controller from "./Controller";
import models from "../../api/models/index";

class AnswerController extends Controller {
  constructor() {
    super();
  }

  // UserId, QuestionId, messageUrl, description
  async createAnswer(answer) {
    try {
      const data = await models.Answer.create({
        ...answer,
      });
      return {
        ok: true,
        data,
      };
    } catch (err) {
      return {
        ok: false,
        data: err,
      };
    }
  }
  // @REFACTOR: Should do this with the bot instead!
  async fetchUser(userId) {
    try {
      const data = await models.User.findByPk(userId, {
        include: [
          {
            model: models.Question,
            attributes: ["id"],
          },
        ],
        order: [[models.Question, "createdAt", "DESC"]],
        limit: 1,
      });
      return {
        ok: true,
        data,
      };
    } catch (err) {
      return {
        ok: false,
        data: err,
      };
    }
  }

 
  parseAnswer(message) {
    const [invalidUserId, ...answer] = message.split(" ");
    let userId = "";
    if (invalidUserId.includes("!")) {
      userId = invalidUserId.split("!")[1].slice(0, -1);
    } else {
      userId = invalidUserId.split("@")[1].slice(0, -1);
    }
    return [userId, answer.join(" ")];
  } 
}

export default new AnswerController();
