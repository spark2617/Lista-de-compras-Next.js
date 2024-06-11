import styles from "@/styles/Tag.module.css";
import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";

type TagProps = {
  category: string;
  checked: boolean;
};

export default function Tag(props: TagProps) {
  return (
    <>
      {props.category === "Fruta" ? (
        <div
          className={`${styles.containerTag} ${
            props.checked ? styles.checked : ""
          } ${styles.fruta}`}
        >
          <Apple size={16} />
          fruta
        </div>
      ) : props.category === "Legume" ? (
        <div
          className={`${styles.containerTag} ${
            props.checked ? styles.checked : ""
          } ${styles.legume}`}
        >
          <Carrot size={16} /> legume
        </div>
      ) : props.category === "Carne" ? (
        <div
          className={`${styles.containerTag} ${
            props.checked ? styles.checked : ""
          } ${styles.carne}`}
        >
          <Beef size={16} /> carne
        </div>
      ) : props.category === "Padaria" ? (
        <div
          className={`${styles.containerTag} ${
            props.checked ? styles.checked : ""
          } ${styles.padaria}`}
        >
          <Sandwich size={16} /> padaria
        </div>
      ) : (
        <div
          className={`${styles.containerTag} ${
            props.checked ? styles.checked : ""
          } ${styles.bebida}`}
        >
          <Milk size={16} /> bebida
        </div>
      )}
    </>
  );
}
