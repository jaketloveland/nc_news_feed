import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import Filter from "./components/Filter";
import Articles from "./components/Articles";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header setFilter={setFilter} />
              <Filter setFilter={setFilter} filter={filter} />
              <Articles filter={filter} />
            </div>
          }
        />
        <Route
          path="/articles"
          element={
            <div>
              <Header setFilter={setFilter} />
              <Articles filter={filter} />
            </div>
          }
        ></Route>
        <Route
          path="/articles/:article_id"
          element={
            <div>
              <Header setFilter={setFilter} />
              <Article />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

// add element for articles linking to new article page

export default App;
