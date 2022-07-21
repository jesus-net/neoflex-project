import { Routes, Route } from "react-router-dom";
import { Layout } from "@router/Layout";
import { Auth } from "@pages/Auth/Auth";
import { Home } from "@pages/Home/Home";
import { PostCreate } from "@pages/Post/PostCreate";
import { PostIncoming } from "@pages/Post/PostIncoming";
import { NotFound } from "@pages/Error/NotFound";
import { ProtectedRoutes } from "@router/ProtectedRoutes";

export const Views = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/post=:id" element={<PostIncoming />} />
          <Route path="/post" element={<PostCreate />} />
        </Route>
      </Route>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
