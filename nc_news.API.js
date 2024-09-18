import axios from "axios";

const ncNewsAPi = axios.create({
  baseURL: "https://articlesapi-516n.onrender.com/",
});

export function getArticles() {
  return ncNewsAPi.get("/api/articles/").then((response) => {
    return response.data;
  });
}

export function getArticle(id) {
  return ncNewsAPi.get(`/api/articles/${id}`).then((response) => {
    return response.data;
  });
}

export function getComments(id) {
  console.log(id, "<--- id");
  return ncNewsAPi.get(`/api/articles/${id}/comments`).then((response) => {
    return response.data;
  });
}
