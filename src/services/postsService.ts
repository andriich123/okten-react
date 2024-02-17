import { urls } from "../constants/urls";
import { IPost } from "../interfaces/posts";
import { apiService } from "./apiService";

const postsService = {
  getById: (id: number) => apiService.get<IPost>(urls.posts.getById(id)),
};

export { postsService };
