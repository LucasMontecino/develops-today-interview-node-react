const { Router } = require("express");
const countriesRoute = require("./getAllCountries.js");
const borderCountriesRoute = require("./getAllBorderCountries.js");
const populationRoute = require("./getPopulationCountry.js");
const countryFlagRoute = require("./getCountryFlag.js");
const router = Router();

router.use("/countries", countriesRoute);
router.use("/border-countries", borderCountriesRoute);
router.use("/population", populationRoute);
router.use("/flag", countryFlagRoute);

module.exports = router;
