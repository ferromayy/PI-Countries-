const { Country, Activity } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  if (!name || !difficulty || !duration || !season) {
    throw Error("missing data to be completed");
  }

  const newActivity = await Activity?.create({
    name,
    difficulty,
    duration,
    season,
  });

  await newActivity?.addCountries(countries);
  console.log(newActivity, "juju");
  return newActivity;
};

const getActivity = async () => {
  const allActivities = await Activity.findAll();
  if (!allActivities.length) {
    throw Error("the activities you are looking for does not exist");
  }

  return allActivities;
};

module.exports = {
  createActivity,
  getActivity,
};
