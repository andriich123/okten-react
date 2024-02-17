import { urls } from "../constants/urls";
import { IPost } from "../interfaces/posts";
import { apiService } from "./apiService";

const postsService = {
  getAll: () => apiService.get<IPost[]>(urls.posts.base),
  getById: (id: number) => apiService.get<IPost>(urls.posts.getById(id)),
  getByUserId: (id: number) =>
    apiService.get<IPost[]>(urls.posts.base, { params: { userId: id } }),
};

export { postsService };
