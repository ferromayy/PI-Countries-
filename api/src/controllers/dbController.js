const axios = require("axios");
const { Country } = require("../db");
const { URL } = process.env;
const dbb = async () => {
  {
    const apiUrl = await axios.get(`https://restcountries.com/v3.1/all`);

    const cleanApi = await apiUrl.data?.map((el) => {
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

    await Country.bulkCreate(cleanApi, { ignoreDuplicates: true });
  }
};

module.exports = { dbb };
