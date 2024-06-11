// src/context/ShoppingListContext.tsx
import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  unitOfMeasure: string;
  category: string;
  checked: boolean;
}

interface ContextProps {
  children: ReactNode;
}

interface ShoppingListContextProps {
  items: ShoppingItem[];
  addItem: (item: ShoppingItem) => void;
  updateItem: (item: ShoppingItem) => void;
  deleteItem: (id: string) => void;
  toggleItemChecked: (id: string) => void;
}

const ShoppingListContext = createContext<ShoppingListContextProps | undefined>(
  undefined
);

function ShoppingListProvider({ children }: ContextProps) {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false); 

  useEffect(() => {
    function loadShoppingItems() {
      const storedItems = localStorage.getItem("shoppingList");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
      setIsLoaded(true); 
    }

    loadShoppingItems();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("shoppingList", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = (item: ShoppingItem) => {
    setItems((prevItems) => [item, ...prevItems]);
  };

  const updateItem = (updatedItem: ShoppingItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleItemChecked = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <ShoppingListContext.Provider
      value={{ items, addItem, updateItem, deleteItem, toggleItemChecked }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}

export { ShoppingListProvider, ShoppingListContext };
