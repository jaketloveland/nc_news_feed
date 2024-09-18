import { useParams } from "react-router-dom";
import { getArticle } from "../../nc_news.API";
import { useEffect, useState } from "react";
import Comments from "./Comments";

const Article = () => {
  const [articleObject, setArticleObject] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((articleContent) => {
      setArticleObject(articleContent);
    });
  }, [article_id]);

  return articleObject ? (
    <div className="articlePage">
      <h1 className="articleTitle"> {articleObject.title} </h1>
      <p> votes= {articleObject.votes} </p>
      <img className="articlePageImg" src={articleObject.article_img_url} />
      <main className="articlePageBody"> {articleObject.body} </main>
      <Comments article_id={article_id} />
    </div>
  ) : (
    <h2> Loading </h2>
  );
};

export default Article;
