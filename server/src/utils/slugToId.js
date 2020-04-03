import models from "../api/models/index";
import response from "../utils/sendResponse";

const slugToId = async (req, res, next) => {
  const { params, query } = req;
  // Incase the client has no id, we will receive the slug
  if (
    params.id === "null" ||
    params.id === "undefined" ||
    query.id === "null" ||
    query.id === "undefined"
  ) {
    // Get id by slug
    try {
      const data = await models.Guild.findOne({
        where: {
          slug: query.slug
        },
        attributes: ["id"]
      });
      if (!data) {
        response(res, 404, data, false);
      }
      res.locals.guildId = data.id;
    } catch (err) {
      response(res, 500, err, false);
    }
  } else {
    res.locals.guildId = params.id || query.id;
  }

  next();
};

export default slugToId;
