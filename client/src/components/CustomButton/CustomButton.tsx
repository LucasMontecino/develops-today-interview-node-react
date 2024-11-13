import Link from "next/link";
import styles from "./CustomButton.module.css";

export default function CustomButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <button className={styles.button}>
      <Link href={href}>{text}</Link>
    </button>
  );
}
