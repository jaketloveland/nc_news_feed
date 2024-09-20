import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SortbyFilter = ({ sortBy, setSortBy }) => {
  const navigate = useNavigate();

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  useEffect(() => {
    if (sortBy === "default") {
      navigate(`/`);
    } else {
      navigate(`/articles?sortBy=${sortBy}`);
    }
  }, [sortBy]);

  return (
    <div>
      <label> Sort by </label>
      <select onChange={handleSortChange} value={sortBy}>
        {<option value={"default"}> default </option>}
        {<option value={"votes&order=desc"}> most votes </option>}
        {<option value={"votes&order=asc"}> least votes </option>}
        {<option value={"created_at&order=desc"}> newest</option>}
        {<option value={"created_at&order=asc"}> oldest </option>}
      </select>
    </div>
  );
};

export default SortbyFilter;
