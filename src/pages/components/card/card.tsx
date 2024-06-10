import styles from "@/styles/Card.module.css";
import { Check, Dot, EllipsisVertical, MoveVertical } from "lucide-react";
import { useState } from "react";
import Tag from "../tag/TagCategory";

export default function Card() {
  const [isChecked, setIschecked] = useState<boolean>(false);

  function handleCheckboxChange() {
    setIschecked(!isChecked);
  }

  return (
    <div
      className={`${styles.cardContainer} ${isChecked ? styles.checked : ""}`}
    >
      <div className={styles.flexRow}>
        <div className={styles.checkbox}>
          <label htmlFor="check">
            <input
              id="check"
              checked={isChecked}
              onChange={handleCheckboxChange}
              name="check"
              type="checkbox"
            />
            <span>{isChecked ? <Check /> : ""}</span>
          </label>
        </div>
        <div className={styles.flexColumn}>
          <strong
            className={`${styles.cardTitle} ${
              isChecked ? styles.lineThroungh : ""
            }`}
          >
            Maçã
          </strong>
          <span className={styles.cardDetails}>6 unidades</span>
        </div>
      </div>

      <div className={styles.flexRow}>
        <Tag checked={isChecked} category="padaria" />
        <EllipsisVertical size={20} color="#A881E6" />
      </div>
    </div>
  );
}
