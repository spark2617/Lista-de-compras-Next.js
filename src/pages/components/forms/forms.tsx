import styles from "@/styles/Forms.module.css";
import {
  Apple,
  Beef,
  Carrot,
  Check,
  ChevronDown,
  ChevronUp,
  Milk,
  Plug,
  Plus,
  Sandwich,
} from "lucide-react";
import { useState } from "react";

export default function Forms() {
  const [typeAmount, setTypeAmount] = useState<string>("UN.");
  const [openAmount, setOpenAmount] = useState<boolean>(false);

  const [category, setCategory] = useState<string>("Selecione");
  const [openCategory, setOpenCategory] = useState<boolean>(false);


  const [item, setItem] =useState<string>("")
  const [amount, setAmount] = useState<number>(1)

  const purpleLight = "#A881E6";
  const yellow = "#BB9F3A";
  const green = "#8CAD51";
  const pink = "#DB5BBF";
  const orange = "#E07B67";
  const blue = "#7B94CB";

  const categories = [
    { icon: <Sandwich color={yellow} size={16} />, label: "Padaria" },
    { icon: <Carrot color={green} size={16} />, label: "Legume" },
    { icon: <Beef color={pink} size={16} />, label: "Carne" },
    { icon: <Apple color={orange} size={16} />, label: "Fruta" },
    { icon: <Milk color={blue} size={16} />, label: "Bebida" },
  ];

  function handleClickAmount(amount: string) {
    setTypeAmount(amount);
    setOpenAmount(false);
  }

  function handleClickCategory(category: string) {
    setCategory(category);
    setOpenCategory(false);
  }

  function handleChangeAmount(e: React.ChangeEvent<HTMLInputElement>){
    setAmount(parseInt(e.target.value))
  }

  function handleChangeItem(e:React.ChangeEvent<HTMLInputElement>){
    setItem(e.target.value)
  }



  return (
    <form className={styles.containerForm}>
      <div className={styles.column}>
        <label htmlFor="">Name</label>
        <input type="text" value={item} onChange={handleChangeItem} />
      </div>

      <div className={styles.column}>
        <label htmlFor="">Quantidade</label>
        <div className={styles.flexRow}>
          <input type="number" value={amount} onChange={handleChangeAmount}/>

          <div className={styles.flexColumn}>
            <div
              className={`${styles.selectAmount} ${styles.amount} ${
                styles.select
              } ${openAmount ? styles.borderFocus : ""}`}
              onClick={() => setOpenAmount(!openAmount)}
            >
              {typeAmount}
              {openAmount ? (
                <ChevronUp color={purpleLight} size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>
            {openAmount && (
              <ul className={styles.optionAmount}>
                {["UN.", "L", "Kg"].map((item) => (
                  <li key={item} onClick={() => handleClickAmount(item)}>
                    {item}{" "}
                    {typeAmount === item && <Check color={purpleLight} size={12} />}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <label htmlFor="categorias">Categoria</label>
        <div
          onClick={() => setOpenCategory(!openCategory)}
          className={`${styles.select} ${styles.selectCategory} ${
            openCategory ? styles.borderFocus : ""
          }`}
        >
          {category}
          {openCategory ? (
            <ChevronUp color={purpleLight} size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>

        {openCategory ? (
          <ul className={`${styles.optionCategory}`}>
            {categories.map(({ icon, label }, index) => (
              <li onClick={() => handleClickCategory(label)} key={index}>
                <div>
                  {icon}
                  {label}
                </div>
                {category === label && <Check color={purpleLight} size={12} />}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className={styles.containerFormButton}>
        <button >
          <Plus size={24} color="#fbf9fe" />
        </button>
      </div>
    </form>
  );
}
