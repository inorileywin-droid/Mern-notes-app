import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;




// code is to shoten the api link we are hitting when we make an axios call

// this: ("http://localhost:5001/api/notes")
// to this: ("/notes")