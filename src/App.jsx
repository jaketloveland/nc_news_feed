import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";

function App() {
  const [filter, setFilter] = useState("null");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Articles />
            </div>
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <div>
              <Header />
              <Article />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
