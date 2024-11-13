const { Router } = require("express");

const borderCountriesRoute = Router();
const url = "https://date.nager.at/api/v3/CountryInfo";

async function getBorderCountries(countryCode) {
  const data = await fetch(`${url}/${countryCode}`);
  if (data) {
    return data.json();
  }
}

borderCountriesRoute.get("/:countryCode", async (req, res) => {
  const { countryCode } = req.params;
  try {
    const borderCountries = await getBorderCountries(countryCode);
    borderCountries
      ? res.status(200).json(borderCountries)
      : res.status(400).json("There is no country with that country code.");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = borderCountriesRoute;
