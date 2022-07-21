import "@pages/Post/Post.scss";
import {FormCreate} from "@components/Form/FormCreate";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { toggleNavbar } from "@slice/homeSlice";

export const PostCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector(state => state.user.role);
  const handlePost = () => dispatch(toggleNavbar(false));
  useEffect(() => {
    if (role === "admin") {
      navigate("/home")
    };
  }, []);
  return (
    <main className="new-claim" onClick={handlePost}>
      <div className="new-claim__container">
        <h1 className="title">Creating new claim</h1>
        <FormCreate />
      </div>
    </main>
  );
};

