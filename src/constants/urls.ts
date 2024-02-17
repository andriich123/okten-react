const baseURL = "https://jsonplaceholder.typicode.com";

const users = "/users";
const posts = "/posts";
const comments = "/comments";

const urls = {
  users: {
    base: `${users}`,
    getById: (id: number) => `${users}/${id}`,
  },
  posts: {
    base: `${posts}`,
    getById: (id: number) => `${posts}/${id}`,
  },
  comments: {
    base: `${comments}`,
  },
};

export { urls, baseURL };
