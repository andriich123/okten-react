import { urls } from "../constants/urls";
import { IComment } from "../interfaces/comments";
import { apiService } from "./apiService";

const commentsService = {
  getByPostId: (postId: number) =>
    apiService.get<IComment[]>(urls.comments.base, { params: { postId } }),
};

export { commentsService };
