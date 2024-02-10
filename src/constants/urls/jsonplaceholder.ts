const baseURL = "https://jsonplaceholder.typicode.com";

const urls = {
  posts: "/posts",
  post: (id: number) => `/posts/${id}`,
};

export { baseURL, urls };
