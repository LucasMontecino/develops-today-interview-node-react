import CountryDetails from "@/components/CountryDetails/CountryDetails";

async function getCountryFlag(country: string) {
  const res = await fetch("http://localhost:3001/flag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country }),
  });

  return res.json();
}

async function getCountryPopulation(country: string) {
  const res = await fetch("http://localhost:3001/population", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country }),
  });

  return res.json();
}

async function getBorderCountries(code: string) {
  const res = await fetch(`http://localhost:3001/border-countries/${code}`);
  return res.json();
}

export default async function CountryDetailsPage({
  params,
}: {
  params: Promise<{ countryName: string; countryCode: string }>;
}) {
  const { countryName, countryCode } = await params;
  const countryFlag = getCountryFlag(countryName);
  const countryBorders = getBorderCountries(countryCode);
  const countryPopulation = getCountryPopulation(countryName);

  const [flag, borders, population] = await Promise.all([
    countryFlag,
    countryBorders,
    countryPopulation,
  ]);

  return (
    <CountryDetails flag={flag} borders={borders} population={population} />
  );
}
