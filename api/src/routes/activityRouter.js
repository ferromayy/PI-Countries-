const express = require("express");
const router = express.Router();
const { createActivity } = require("../controllers/activityController");

router.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryId } = req.body;
    const newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countryId
    );
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
