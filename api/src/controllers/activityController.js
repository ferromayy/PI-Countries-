const { Country, Activity } = require("../db");
const axios = require("axios");
//const { getAllInfo } = require("../controllers/countryController");

const createActivity = async (
  name,
  difficulty,
  duration,
  season
  // countryId
) => {
  if (!name || !difficulty || !duration || !season) {
    throw Error("missing data to be completed");
  }
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  //   return newActivity;

  //   me trae todos los countrys que ya existen, y renovados
  //   const findCountry = await Country.findAll({
  //     where: {
  //       id: countryId,
  //     },
  //   });
  //   await newActivity.addCountries(findCountry);
  //   return newActivity;
};

module.exports = {
  createActivity,
};
