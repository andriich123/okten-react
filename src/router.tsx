import { createBrowserRouter } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import Post from "./components/CommentsContainer/Post";
import MainLayout from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <TodosPage /> },
      { path: "todos", element: <TodosPage /> },
      { path: "albums", element: <AlbumsPage /> },
      {
        path: "comments",
        element: <CommentsPage />,
        children: [{ path: "posts", element: <Post /> }],
      },
    ],
  },
]);
