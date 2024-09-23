import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTdhYWM5MWMxZDRlZjZkMGQyMTg0M2YyMjFmNjU4NiIsIm5iZiI6MTcyNzA4ODg2My45ODMxOTIsInN1YiI6IjY2ZjE0NzQ3YTk3ODgwMTQ4ZjNiMDkzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djR6LTIEJWjeVfcB2SrCRALayfZyVM4jnlH648MSf10";

export default async function fetchData(page = 1, query = "", endPoint) {
  const params = {
    page,
    query,
    api_key: "b17aac91c1d4ef6d0d21843f221f6586",
  };
  const respons = await axios.get(`${endPoint}`, { params });

  return respons.data;
}