import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <main>
      <Header />
      <NavBar />
      <AppRouter />
    </main>
  );
}

export default App;
