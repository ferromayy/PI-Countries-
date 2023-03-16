const { Router } = require("express");
const express = require("express");

const countryRouter = require("./countryRouter");
const activityRouter = require("./activityRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
router.use(express.json());
router.use("/countries", countryRouter);
router.use("/activities", activityRouter);
// router.use("/activities", activityRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
