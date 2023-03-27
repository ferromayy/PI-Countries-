const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
