import { useParams } from "react-router-dom";
import { getArticle, upVote } from "../../nc_news.API";
import { useEffect, useState } from "react";
import Comments from "./Comments";

const Article = () => {
  const [articleObject, setArticleObject] = useState(null);
  const { article_id } = useParams();
  const [votes, setVotes] = useState(0);
  const [votingDisabled, setVotingDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [voteMessage, setVoteMessage] = useState(false);
  const [articleExists, setArticleExists] = useState(true);

  useEffect(() => {
    getArticle(article_id)
      .then((articleContent) => {
        setArticleExists(true);
        setArticleObject(articleContent);
      })
      .catch((error) => {
        setArticleExists(false);
      });
  }, [article_id]);

  function handleVote(articleID, originalVotes) {
    if (!votingDisabled) {
      setVotes(originalVotes);
      setError(false);
      setVotingDisabled(true);
      setVotes(originalVotes + 1);

      upVote(articleID)
        .then((response) => {
          if (response !== originalVotes + 1) {
            console.log("we are in error part");
            setError(true);
            setVotes((prevVotes) => prevVotes + 1);
          }
        })
        .catch((err) => {
          setVotingDisabled(false);
          setVotes((prevVotes) => prevVotes - 1);
        });
    } else {
      setVoteMessage("you can only vote once!");
    }
  }

  if (articleExists) {
    return articleObject ? (
      <div className="articlePage">
        <h1 className="articleTitle"> {articleObject.title} </h1>

        <img className="articlePageImg" src={articleObject.article_img_url} />
        <main className="articlePageBody"> {articleObject.body} </main>
        <br />
        {votes ? (
          <p> votes= {votes} thanks for your vote </p>
        ) : (
          <p> votes= {articleObject.votes} </p>
        )}
        {error ? (
          <h3 className="errorText">
            error, problem with voting please try again later{" "}
          </h3>
        ) : (
          <></>
        )}
        {voteMessage ? <h1> {voteMessage} </h1> : <></>}

        <button
          label={"vote"}
          onClick={() => {
            handleVote(articleObject.article_id, articleObject.votes);
          }}
        >
          upVote
        </button>
        <Comments article_id={article_id} />
      </div>
    ) : (
      <h2> Loading </h2>
    );
  } else {
    return <h3> Article doesn't exist </h3>;
  }
};

export default Article;
