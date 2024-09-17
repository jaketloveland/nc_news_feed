import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <Header />
      <Articles />
    </div>
  );
}

export default App;
