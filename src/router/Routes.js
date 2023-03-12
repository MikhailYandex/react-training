import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/posts", component: Posts, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
  { path: "*", component: Error, exact: true },
  { path: "/", component: Posts, exact: true },
];

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];

//<Route path="/posts" element={<Posts />} />
//<Route path="/about" element={<About />} />
//<Route path="/posts/:id" element={<PostIdPage />} />
//<Route path="*" element={<Error />} />
//<Route path="/" element={<Navigate replace to="/posts" />} />
