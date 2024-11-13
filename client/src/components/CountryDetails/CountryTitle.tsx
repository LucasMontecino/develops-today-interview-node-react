import Image from "next/image";
import Title from "../Title/Title";
import { FlagType } from "@/lib/definitions";
import style from "./CountryTitle.module.css";

export default function CountryTitle({ flag }: { flag: FlagType }) {
  return (
    <div className={style.title}>
      <Title text={flag.name} />
      <Image
        src={flag.flag ? flag.flag : "/not-found.webp"}
        alt={flag.name}
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
