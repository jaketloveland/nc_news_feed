import { useEffect, useState } from "react";
import { getArticles } from "../../nc_news.API";
import { Link } from "react-router-dom";

const Articles = ({ filter, sortBy }) => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getArticles(filter, sortBy).then((data) => {
      const articles = data.map((article) => {
        return (
          <Link to={"/articles/" + article.article_id} key={article.article_id}>
            <div className="article">
              <p className="article-title"> {article.title} </p>
              <p className="author"> by {article.author} </p>
              <img src={article.article_img_url} alt={article.title} />
              <p> votes: {article.votes}</p>
            </div>
          </Link>
        );
      });
      setAllArticles(articles);
    });
  }, [filter, sortBy]);

  return allArticles.length ? (
    <div className="articles-container"> {allArticles} </div>
  ) : (
    <p> Loading </p>
  );
};

export default Articles;
