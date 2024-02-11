import { urls } from "../../constants/urls/jsonplaceholder";
import { IComment } from "../../types/Comment";
import { apiService } from "./apiService";

const commentsService = {
  getAll: () => apiService.get<IComment[]>(urls.comments.base),
  create: (user: Omit<IComment, "id">) =>
    apiService.post<IComment>(urls.comments.base, user),
};

export { commentsService };
