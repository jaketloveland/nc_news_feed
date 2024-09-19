import { useState } from "react";
import { deleteComment } from "../../nc_news.API";

const DeleteComment = ({ commentId, setAllComments }) => {
  const [itemDeleted, setItemDeleted] = useState(false);
  const [error, setError] = useState(false);

  function handleClick(id) {
    deleteComment(id)
      .then((response) => {
        if (response === undefined) {
          setError(false);
          setItemDeleted(true);

          setAllComments((prev) => {
            const commentIndex = prev.findIndex(
              (comment) => comment.comment_id === id
            );
            return prev.map((comment, index) =>
              index === commentIndex
                ? { ...comment, body: "deleted", votes: "" }
                : comment
            );
          });
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
      });
  }

  return (
    <div>
      <p
        onClick={() => {
          handleClick(commentId);
        }}
        className="delete"
      >
        Delete
      </p>
      {error ? <h2> comment already deleted </h2> : <></>}
    </div>
  );
};

export default DeleteComment;
