import style from "./Title.module.css";

export default function Title({ text }: { text: string }) {
  return <h1 className={style.title}>{text}</h1>;
}
