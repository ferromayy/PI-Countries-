const express = require("express");
const router = express.Router();
const {
  getAllInfo,
  getCountriesByName,
  getCountriesById,
} = require("../controllers/countryController");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const totalCountries = await getAllInfo();
    if (name) {
      const countryName = await getCountriesByName(name);
      return res.status(200).json(countryName);
    } else {
      return res.status(200).json(totalCountries);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const idCountry = await getCountriesById(id);
    res.status(200).json(idCountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
