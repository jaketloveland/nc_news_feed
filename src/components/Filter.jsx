import { useEffect, useState } from "react";
import { getTopics } from "../../nc_news.API";
import { useNavigate } from "react-router-dom";

const Filter = ({ setFilter, filter }) => {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics.map((topic) => topic.slug));
    });
  }, []);

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    if (filter === "All") {
      navigate(`/`);
    } else {
      navigate(`/articles?topic=${filter}`);
    }
  }, [filter]);

  return (
    <div>
      <label> Filter by topic </label>
      <select onChange={handleFilterChange} value={filter}>
        {<option value={"All"}> All </option>}
        {topics.map((topic) => (
          <option value={topic} key={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
