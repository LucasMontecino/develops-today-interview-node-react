const { Router } = require("express");

const populationRoute = Router();
const url = "https://countriesnow.space/api/v0.1/countries/population";

async function getPopulation(country) {
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

populationRoute.post("/", async (req, res) => {
  const country = req.body.country;
  try {
    const populationCountry = await getPopulation(country);
    populationCountry
      ? res.status(200).json(populationCountry)
      : res.status(400).json("There is no country with that country name.");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = populationRoute;
