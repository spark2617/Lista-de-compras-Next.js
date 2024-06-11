// src/context/ShoppingListContext.tsx
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

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

function ShoppingListProvider({ children }:ContextProps){
  const [items, setItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("shoppingList");
    
    if (storedItems) {
      
      setItems(JSON.parse(storedItems));
      
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addItem = (item: ShoppingItem) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem: ShoppingItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItemChecked = (id: string) => {
    setItems(
      items.map((item) =>
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
};

export { ShoppingListProvider, ShoppingListContext };
