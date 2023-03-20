const express = require("express");
const router = express.Router();
const {
  allCountries,
  CountryByName,
  CountryById,
} = require("../controllers/countryController");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const totalCountries = await allCountries();
    if (name) {
      const countryName = await CountryByName(name);
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
    const allId = await CountryById(id);

    res.status(200).json(allId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
