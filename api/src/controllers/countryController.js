const { Country, Activity } = require("../db");
const axios = require("axios");

const getApiInfo = async () => {
  const apiUrl = await axios.get(`https://restcountries.com/v3.1/all`);

  let cleanApi = await apiUrl.data?.map((el) => {
    return {
      id: el.cca3,
      name: el.name.official,
      flag_image: el.flags.png,
      capitalCity: el.capital ? el.capital[0] : "capitalCity not found",
      continent: el.continents[0], //.map((e)=> {for(let i = 0; i < e.length; i = ++ ) return e[i]}),
      subregion: el.subregion,
      area: el.area,
      population: el.population,
    };
  });
  return cleanApi;
};

const getDbInfo = async () => {
  const bdInfoo = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  console.log(bdInfoo);
};

const getAllInfo = async () => {
  const allDbInfo = await getDbInfo();
  const allApiInfo = await getApiInfo();
  const allInfo = allApiInfo.concat(allDbInfo);
  return allInfo;
};
const getCountriesByName = async (nameC) => {
  const countryByName = await getAllInfo();
  const cleanByName = await countryByName.filter((el) =>
    el.name.toLowerCase().includes(nameC.toLowerCase())
  );
  if (!cleanByName.length) {
    throw Error("the user you are looking for does not exist");
  }
  return cleanByName;
};
const getCountriesById = async (idC) => {
  const getCountryById = await getAllInfo();
  const cleanById = await getCountryById.filter((el) =>
    el.id.toLowerCase().includes(idC.toLowerCase())
  );
  if (!cleanById.length) {
    throw Error("The id you are looking for does not exist");
  }
  return cleanById;
};

module.exports = {
  getAllInfo,
  getCountriesByName,
  getCountriesById,
};
