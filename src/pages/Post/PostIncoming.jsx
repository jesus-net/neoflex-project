import "@pages/Post/Post.scss";
import {FormIncoming} from "@components/Form/FormIncoming";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleNavbar } from "@slice/homeSlice";

export const PostIncoming = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.role);
  const handlePost = () => dispatch(toggleNavbar(false));
  console.log(role);
  useEffect(() => {
    if (role === "work") navigate("/home");
  }, []);
  return (
    <main className="new-claim" onClick={handlePost}>
      <div className="new-claim__container">
        <h1 className="title">Incoming claim</h1>
        <FormIncoming />
      </div>
    </main>
  );
};
