import { useEffect } from "react";
import { getComments } from "../../nc_news.API";
import { useState } from "react";

const Comments = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setAllComments(data.msg);
    });
  }, [article_id]);

  return (
    <div>
      <h3> Comments </h3>
      <section className="comments">
        {allComments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment">
              <p className="commentAuthor">
                {comment.author} at {comment.created_at}
              </p>
              <section className="commentBody">
                <p> {comment.body} </p>
                <p> votes: {comment.votes} </p>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Comments;
