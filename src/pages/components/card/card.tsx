import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Check, Trash2 } from 'lucide-react';
import { useState } from 'react';
import styles from '@/styles/Card.module.css';
import Tag from '../tag/TagCategory';
import useShoppingList from '@/pages/context/useContext';
import { ShoppingItem } from '@/pages/context/contextProvider';

export default function Card({
  name,
  id,
  checked,
  category,
  unitOfMeasure,
  quantity,
}: ShoppingItem) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const context = useShoppingList();

  function handleCheckboxChange(id: string) {
    setIsChecked(!isChecked);
    context.toggleItemChecked(id);
  }

  function handleClickExcluir(id: string) {
    context.deleteItem(id);
  }

  return (
    <TransitionGroup>
      <CSSTransition
        key={id}
        timeout={300}
        classNames={{
          enter: styles.cardEnter,
          enterActive: styles.cardEnterActive,
          exit: styles.cardExit,
          exitActive: styles.cardExitActive,
        }}
        unmountOnExit
        

      >
        <div
          className={`${styles.cardContainer} ${isChecked ? styles.checked : ''}`}
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
                <span>{isChecked ? <Check /> : ''}</span>
              </label>
            </div>
            <div className={styles.flexColumn}>
              <strong
                className={`${styles.cardTitle} ${isChecked ? styles.lineThrough : ''}`}
              >
                {name}
              </strong>
              <span className={styles.cardDetails}>
                {quantity}{' '}
                {unitOfMeasure === 'UN.' ? 'unitario' : unitOfMeasure === 'Kg' ? 'kilo' : 'litros'}
              </span>
            </div>
          </div>

          <div className={styles.flexRow}>
            <Tag checked={isChecked} category={category} />
            <Trash2
              className={styles.trash}
              size={20}
              onClick={() => handleClickExcluir(id)}
            />
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
