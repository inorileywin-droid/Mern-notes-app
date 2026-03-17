import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default api;




// code is to shoten the api link we are hitting when we make an axios call

// this: ("http://localhost:5001/api/notes")
// to this: ("/notes")