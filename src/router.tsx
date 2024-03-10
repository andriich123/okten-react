import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { CarsPage } from "./pages/CarsPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/cars" /> },
      { path: "/cars", element: <CarsPage /> },
    ],
  },
]);

export { router };
