import Head from "next/head";
import Forms from "./components/forms/forms";
import styles from "@/styles/Home.module.css";
import Header from "./components/header";
import Card from "./components/card/card";
import useShoppingList from "./context/useContext";
import { Scroll } from "lucide-react";

export default function Home() {
  const context = useShoppingList();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="descripftion" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Forms />

      <div className={styles.painel}>
        {context.items.length > 0 ? (
          context.items.map((item) => (
            
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              unitOfMeasure={item.unitOfMeasure}
              checked={item.checked}
              category={item.category}
            />
          ))
        ) : (
          <>
            <Scroll className={styles.scroll} strokeWidth={0.5} size={200} />

            <p className={styles.text}>
            Oops! Parece que sua lista de compras está vazia. Não se preocupe, estamos aqui para ajudar você a preenchê-la com todos os itens que você precisa. Que tal começar adicionando alguns produtos à sua lista? 
            </p>
          </>
        )}
      </div>
    </>
  );
}
