const { Country, Activity } = require("../db");
const axios = require("axios");
const { Sequelize, Op } = require("sequelize");

const allCountries = async () => {
  const allDbInfo = await Country.findAll({
    include: Activity,
  });
  return allDbInfo;
};

const CountryByName = async (name) => {
  const byNameInfo = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name.toLowerCase()}%`,
      },
    },
    include: Activity,
  });
  if (!byNameInfo.length) {
    throw Error("the user you are looking for does not exist");
  }
  return byNameInfo;
};

const CountryById = async (id) => {
  const byIdInfo = await Country.findAll({
    where: {
      id: id,
    },
    include: Activity,
  });
  if (!byIdInfo.length) {
    throw Error("The id you are looking for does not exist");
  }
  return byIdInfo;
};

module.exports = {
  allCountries,
  CountryByName,
  CountryById,
};
