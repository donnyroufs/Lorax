import models from "../api/models/index";

const slugToId = async (req, res, next) => {
  const { params, query } = req;
  // Incase the client has no id, we will receive the slug
  if (
    (params.id === "null" && query.slug) ||
    (params.id === "undefined" && query.slug)
  ) {
    // Get id by slug
    try {
      const data = await models.Guild.findOne({
        where: {
          slug: query.slug
        },
        attributes: ["id"]
      });
      res.locals.guildId = data.id;
    } catch (err) {
      throw err;
    }
  } else {
    res.locals.guildId = params.id;
  }

  next();
};

export default slugToId;
