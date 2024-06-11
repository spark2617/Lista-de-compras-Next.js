import styles from "@/styles/Card.module.css";
import { Check, Dot, EllipsisVertical, MoveVertical } from "lucide-react";
import { useState } from "react";
import Tag from "../tag/TagCategory";
import { ShoppingItem } from "@/pages/context/contextProvider";
import useShoppingList from "@/pages/context/useContext";

export default function Card({
  name,
  id,
  checked,
  category,
  unitOfMeasure,
  quantity,
}: ShoppingItem) {
  const [isChecked, setIschecked] = useState<boolean>(checked);

  const context = useShoppingList();

  function handleCheckboxChange(id: string) {
    setIschecked(!isChecked);
    context.toggleItemChecked(id);
  }

  return (
    <div
      className={`${styles.cardContainer} ${isChecked ? styles.checked : ""}`}
    >
      <div className={styles.flexRow}>
        <div className={styles.checkbox}>
          <label htmlFor={id}>
            <input
              id={id}
              checked={isChecked}
              onChange={() => {
                handleCheckboxChange(id);
              }}
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
            {name}
          </strong>
          <span className={styles.cardDetails}>
            {quantity}{" "}
            {unitOfMeasure === "UN."
              ? "unitario"
              : unitOfMeasure === "Kg"
              ? "kilo"
              : "litros"}
          </span>
        </div>
      </div>

      <div className={styles.flexRow}>
        <Tag checked={isChecked} category={category} />
        <EllipsisVertical size={20} color="#A881E6" />
      </div>
    </div>
  );
}
