import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import Filter from "./components/Filter";
import Articles from "./components/Articles";
import SortbyFilter from "./components/SortbyFilter";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header setFilter={setFilter} setSortBy={setSortBy} />
              <Filter setFilter={setFilter} filter={filter} />
              <SortbyFilter sortBy={sortBy} setSortBy={setSortBy} />
              <Articles filter={filter} sortBy={sortBy} />
            </div>
          }
        />
        <Route
          path="/articles"
          element={
            <div>
              <Header setFilter={setFilter} setSortBy={setSortBy} />
              {sortBy === "default" ? (
                <Filter setFilter={setFilter} filter={filter} />
              ) : (
                <SortbyFilter sortBy={sortBy} setSortBy={setSortBy} />
              )}
              <Articles filter={filter} sortBy={sortBy} />
            </div>
          }
        ></Route>
        <Route
          path="/articles/:article_id"
          element={
            <div>
              <Header setFilter={setFilter} setSortBy={setSortBy} />
              <Article />
            </div>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
