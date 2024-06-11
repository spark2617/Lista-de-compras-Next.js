import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ShoppingListProvider } from "./context/contextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingListProvider>
      <Component {...pageProps} />
    </ShoppingListProvider>
  );
}
