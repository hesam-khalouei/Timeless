import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Thumbnail1920 from "./pages/Thumbnail1920";
import Thumbnail1500 from "./pages/Thumbnail1500";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
  { path: "/thumbnail-1920", Component: Thumbnail1920 },
  { path: "/thumbnail-1500", Component: Thumbnail1500 },
]);