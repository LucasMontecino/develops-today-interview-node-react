import { BorderType, FlagType, PopulationType } from "@/lib/definitions";
import style from "./CountryDetails.module.css";
import CountryTitle from "./CountryTitle";
import CountryBorders from "./CountryBorders";
import Bar from "../Bar/Bar";
import CustomButton from "../CustomButton/CustomButton";

export default function CountryDetails({
  flag,
  borders,
  population,
}: {
  flag: FlagType;
  borders: BorderType;
  population: PopulationType;
}) {
  return (
    <div className={style.wrapper}>
      <CustomButton text="Go Home" href="/" />
      <CountryTitle flag={flag} />

      <CountryBorders borders={borders} />

      <Bar population={population} />
    </div>
  );
}
