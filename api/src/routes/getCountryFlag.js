const { Router } = require("express");

const countryFlagRoute = Router();
const url = "https://countriesnow.space/api/v0.1/countries/flag/images";

async function getCountryFlag(country) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data.error) {
      console.log("Error:", data.error);
      return null;
    } else {
      return data.data;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

countryFlagRoute.post("/", async (req, res) => {
  const country = req.body.country;
  try {
    const countryFlag = await getCountryFlag(country);
    countryFlag
      ? res.status(200).json(countryFlag)
      : res.status(400).json("There is no flag with that country code.");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = countryFlagRoute;
