const baseURL = "https://jsonplaceholder.typicode.com";

const todos = "/todos";
const albums = "/albums";
const comments = "/comments";
const posts = "/posts";

const urls = {
  todos: {
    base: `${todos}`,
  },
  albums: {
    base: `${albums}`,
  },
  comments: {
    base: `${comments}`,
  },
  posts: {
    getById: (id: number) => `${posts}/${id}`,
  },
};

export { urls, baseURL };
