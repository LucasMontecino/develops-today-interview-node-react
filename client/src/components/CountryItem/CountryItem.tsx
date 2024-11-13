import { CountryTipe } from "@/lib/definitions";
import Link from "next/link";
import styles from "./CountryItem.module.css";

export default function CountryItem({ country }: { country: CountryTipe }) {
  return (
    <div className={styles.country}>
      <h3>{country.countryCode}</h3>
      <h2>
        <Link
          href={{
            pathname: `/${country.name}/${country.countryCode}`,
          }}
          className={styles.link}
        >
          {country.name}
        </Link>
      </h2>
    </div>
  );
}
