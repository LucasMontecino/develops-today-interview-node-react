import { BorderType } from "@/lib/definitions";
import Link from "next/link";
import style from "./CountryBorders.module.css";

export default function CountryBorders({ borders }: { borders: BorderType }) {
  return (
    <div className={style.borderContent}>
      <ul className={style.list}>
        {borders.borders.map((border) => (
          <li key={border.countryCode} className={style.listItem}>
            <Link
              href={`/${border.commonName}/${border.countryCode}`}
              className={style.link}
            >
              {border.commonName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
