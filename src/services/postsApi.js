import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

const getPosts = async () => {
  return await axiosInstance.get(`/posts`);
};

export default { getPosts };
