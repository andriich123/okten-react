import { IPost } from "../../types/Post";
import { axiosService } from "./axiosService";

export const postsService = {
  getPosts: () => axiosService.get<IPost[]>("/posts"),
};
