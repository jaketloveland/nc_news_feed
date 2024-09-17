import { useEffect, useState } from "react";
import { getArticles } from "../../nc_news.API";

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      const articles = data.map((article) => {
        return (
          <div key={article.article_id} className="article">
            <p className="article-title"> {article.title} </p>
            <p className="author"> by {article.author} </p>
            <img src={article.article_img_url} alt={article.title} />
            <p> votes: {article.votes}</p>
          </div>
        );
      });

      setAllArticles(articles);
    }, []);
  });

  return <div className="articles-container"> {allArticles} </div>;
};

export default Articles;
