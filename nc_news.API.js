import axios from "axios";

const ncNewsAPi = axios.create({
  baseURL: "https://articlesapi-516n.onrender.com/",
});

export function getArticles(filter, sortBy) {
  if (filter === "All" && sortBy === "default") {
    return ncNewsAPi.get("/api/articles/").then((response) => {
      return response.data;
    });
  } else if (sortBy !== "default") {
    return ncNewsAPi.get(`/api/articles?sort_by=${sortBy}`).then((response) => {
      return response.data;
    });
  } else {
    return ncNewsAPi.get(`/api/articles?topic=${filter}`).then((response) => {
      return response.data;
    });
  }
}

export function getArticle(id) {
  return ncNewsAPi.get(`/api/articles/${id}`).then((response) => {
    return response.data;
  });
}

export function getComments(id) {
  return ncNewsAPi.get(`/api/articles/${id}/comments`).then((response) => {
    return response.data;
  });
}

export function upVote(id) {
  return ncNewsAPi
    .patch(`/api/articles/${id}/`, { inc_votes: 1 })
    .then((response) => {
      return response.data.updatedArticle.votes;
    });
}

export function postComment(selectedUser, newComment, article_id) {
  return ncNewsAPi
    .post(`/api/articles/${article_id}/comments`, {
      username: selectedUser,
      body: newComment,
    })
    .then((response) => {
      return response.data.article;
    });
}

export function getUsers() {
  return ncNewsAPi.get("/api/users").then((response) => {
    return response.data.users;
  });
}

export function deleteComment(id) {
  return ncNewsAPi.delete(`/api/comments/${id}`).then((response) => {});
}

export function getTopics() {
  return ncNewsAPi.get("/api/topics").then((response) => {
    return response.data;
  });
}
