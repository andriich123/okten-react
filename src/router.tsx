import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserPosts from "./components/UsersContainer/UserPosts";
import PostDetailsPage from "./pages/PostDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="users" /> },
      { path: "users", element: <UsersPage /> },
      {
        path: "users/:id",
        element: <UserDetailsPage />,
        children: [{ path: "posts", element: <UserPosts /> }],
      },
      {
        path: "posts/:id",
        element: <PostDetailsPage />,
      },
    ],
  },
]);
