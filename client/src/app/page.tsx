import Title from "@/components/Title/Title";
import styles from "./page.module.css";
import Countries from "@/components/Countries/Countries";

export default async function Home() {
  const data = await fetch("http://localhost:3001/countries");
  const countries = await data.json();
  return (
    <div className={styles.page}>
      <Title text="Welcome to Country APP" />
      <Countries countries={countries} />
    </div>
  );
}
