const baseURL = "https://jsonplaceholder.typicode.com";

const users = "/users";
const comments = "/comments";

const urls = {
  users: {
    base: users,
    byId: (id: number) => `/${users}/${id}`,
  },
  comments: {
    base: comments,
    byId: (id: number) => `/${comments}/${id}`,
  },
};

export { baseURL, urls };
