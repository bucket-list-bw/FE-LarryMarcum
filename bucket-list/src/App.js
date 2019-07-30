import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { data } from "./data";
import { dataComplete } from "./data-complete";

function App() {
  const [items, setItems] = useState(data);
  const [completedItems, setCompletedItems] = useState(dataComplete);

  function addItem(item) {
    setItems([...items, item]);
  }
  return (
    <main>
      <Header />
      <NavBar />
      <AppRouter
        addItem={addItem}
        items={items}
        completedItems={completedItems}
      />
    </main>
  );
}

export default App;
