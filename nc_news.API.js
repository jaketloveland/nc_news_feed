import axios from "axios";

const ncNewsAPi = axios.create({
  baseURL: "https://articlesapi-516n.onrender.com/",
});

export function getArticles() {
  return ncNewsAPi.get("/api/articles/").then((response) => {
    return response.data;
  });
}
