const Sequelize = require("sequelize");

module.exports = class ClubUnionPostComment extends Sequelize.Model {

  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "ClubUnionPostComment",
        tableName: "club_union_post_comment",
        timestamp: true,
        underscored: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      }
    );
  }

  static associate(db) {}
};