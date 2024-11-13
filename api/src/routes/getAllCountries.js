const { Router } = require("express");

const countriesRoute = Router();
const url = "https://date.nager.at/api/v3/AvailableCountries";

async function getCountries() {
  const data = await fetch(url);
  if (data) {
    return data.json();
  }
}

countriesRoute.get("/", async (req, res) => {
  try {
    const allCountries = await getCountries();
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = countriesRoute;
