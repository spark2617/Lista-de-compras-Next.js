import styles from "@/styles/Forms.module.css";

export default function Forms() {
  return (
    <form className={styles.container}>
      <div className={styles.column}>
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>

      <div className={styles.column}>
        <label htmlFor="">Quantidade</label>

        <div className={styles.d_amount}>

        <input type="number" />

        <select name="unit_of_measure" id="unitOfMeasure" className={styles.amount}>
          <option value="unidade" defaultChecked>UN.</option>
          <option value="litro">L</option>
          <option value="kilo">Kg</option>
        </select>

        </div>
      </div>

      <div className={styles.column}>
        <label htmlFor="categorias">categoria</label>
        <select id="category" name="category" className={styles.category}>
          <option value="" disabled selected hidden>
            Selecione
          </option>
          <option value="padaria">Padaria</option>
          <option value="legumes">Legumes</option>
          <option value="carne">Carne</option>
          <option value="frutas">Frutas</option>
          <option value="bebidas">Bebidas</option>
        </select>
      </div>
    </form>
  );
}
