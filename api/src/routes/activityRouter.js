const express = require("express");
const router = express.Router();
const {
  createActivity,
  getActivity,
} = require("../controllers/activityController");

router.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const activities = await getActivity();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
