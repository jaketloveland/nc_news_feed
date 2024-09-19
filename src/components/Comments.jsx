import { useEffect } from "react";
import { getComments, postComment } from "../../nc_news.API";
import { useState } from "react";
import { getUsers } from "../../nc_news.API";
import { deleteComment } from "../../nc_news.API";
import DeleteComment from "./DeleteComment";

const Comments = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [newComment, setNewComment] = useState("");
  const [postingComment, setPostingComment] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setAllComments(data.msg);
      getUsers().then((users) => {
        setSelectedUser(users[0].username);
        setAllUsers(users);
      });
    });
  }, [article_id]);

  function handleComment(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPostingComment(true);
    postComment(selectedUser, newComment, article_id)
      .then((response) => {
        setNewComment("");
        setError(false);
        setAllComments((prev) => {
          setPostingComment(false);
          return [response, ...prev];
        });
      })
      .catch((error) => {
        setPostingComment(false);
        setError(true);
      });
  }

  function handleDropdown(event) {
    setSelectedUser(event.target.value);
  }

  return (
    <div>
      <section>
        <h3> Post comment:</h3>
        <p> select user </p>
        <select onChange={handleDropdown} value={selectedUser}>
          {allUsers.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
        {postingComment ? <h2> Posting Comment </h2> : <></>}
        {error ? <h2> error posting comment </h2> : <></>}
        <form onSubmit={handleSubmit}>
          <label>
            New Comment <input onChange={handleComment} value={newComment} />
          </label>
          <input type="submit" />
        </form>
      </section>
      <h2> Comments </h2>
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
              <DeleteComment
                commentId={comment.comment_id}
                setAllComments={setAllComments}
                className="delete"
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Comments;
