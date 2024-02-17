import { urls } from "../constants/urls";
import { IComment } from "../interfaces/comments";
import { apiService } from "./apiService";

const commentsService = {
  getAll: () => apiService.get<IComment[]>(urls.comments.base),
};

export { commentsService };
