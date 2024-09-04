import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import GalleryPage from "./sections/gallery/GalleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout for the base structure
    children: [
      {
        path: "/gallerypage", // Match this path
        element: <GalleryPage />, // Render GalleryPage here
      },
      // You can add more routes here if needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
