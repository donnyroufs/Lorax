import db from "./index";

export default (sequelize, DataTypes) => {
  const Question = sequelize.define("Question", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    channelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    messageUrl: {
      type: DataTypes.STRING
    },
    views: {
      type: DataTypes.INTEGER,
      default: 0
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Question.associate = models => {
    Question.belongsTo(models.Guild, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Question.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Question.hasMany(models.Answer, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  Question["getSearchVector"] = () => {
    return "PostText";
  };

  (Question["addFullTextIndex"] = () => {
    const searchFields = ["title", "description"];
    const vectorName = Question.getSearchVector();

    sequelize
      .query(
        'ALTER TABLE "' +
          Question.tableName +
          '" ADD COLUMN "' +
          vectorName +
          '" TSVECTOR'
      )
      .then(() => {
        return sequelize
          .query(
            'UPDATE "' +
              Question.tableName +
              '" SET "' +
              vectorName +
              "\" = to_tsvector('english', " +
              searchFields.join(" || ' ' || ") +
              ")"
          )
          .catch(err => {
            throw err;
          });
      })
      .then(() => {
        return sequelize
          .query(
            'CREATE INDEX Question_search_idx ON "' +
              Question.tableName +
              '" USING gin("' +
              vectorName +
              '");'
          )
          .catch(err => {
            throw err;
          });
      })
      .then(() => {
        return sequelize
          .query(
            'CREATE TRIGGER Question_vector_update BEFORE INSERT OR UPDATE ON "' +
              Question.tableName +
              '" FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger("' +
              vectorName +
              "\", 'pg_catalog.english', " +
              searchFields.join(", ") +
              ")"
          )
          .catch(err => {
            throw err;
          });
      })
      .catch(err => {
        throw err;
      });
  }),
    (Question["search"] = (query, GuildId) => {
      query = sequelize.getQueryInterface().escape(query);

      const rawQuery = `
      SELECT *, "Questions"."id" AS "QuestionId" 
      FROM "Questions" 
      JOIN "Users" ON "Users"."id"="Questions"."UserId" 
      WHERE "${Question.getSearchVector()}" @@ plainto_tsquery('english', ${query}) 
      AND "GuildId"='${GuildId}'`;
      // @REFACTOR: Get rid of template literals
      return sequelize.query(rawQuery, {
        hasJoin: true
      });
    });

  return Question;
};

// OUTER JOIN "Answers" ON "Questions"."id"="Answers"."QuestionId"
