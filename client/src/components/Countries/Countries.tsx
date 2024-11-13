import { CountryTipe } from "@/lib/definitions";
import CountryItem from "../CountryItem/CountryItem";
import styles from "./Countries.module.css";

export default function Countries({ countries }: { countries: CountryTipe[] }) {
  return (
    <>
      {countries && countries.length > 0 ? (
        <div className={styles.wrapper}>
          {countries.map((country) => (
            <CountryItem key={country.countryCode} country={country} />
          ))}
        </div>
      ) : (
        <div>No countries found.</div>
      )}
    </>
  );
}
