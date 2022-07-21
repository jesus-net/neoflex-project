import "@components/ClaimList/Claim/Claim.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOverlay } from "@slice/homeSlice";


export const Claim = ({ id, title, created, type, typeSlug, status, statusSlug }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user.role);

  const navigateIncomingPost = (e) => {
    e.preventDefault();
    if (role === "admin") return navigate(`/post=${id}`);
    else {
      dispatch(setOverlay(true));
      setTimeout(() => dispatch(setOverlay(false)), 3000);
    }
  };

  return (
    <div className="claim">
      <div className="claim__title">
        <div className="claim__text">{title}</div>
      </div>

      <div className="claim__block">
        <div className="claim__filter">Created</div>
        <div className="claim__created">
          <div className="claim__text">{created}</div>
        </div>
      </div>
      <div className="claim__block">
        <div className="claim__filter">Type</div>
        <div className="claim__type">
          <div className={"claim__text " + typeSlug}>{type}</div>
        </div>
      </div>
      <div className="claim__block">
        <div className="claim__filter">Status</div>
        <div className={"claim__status " + statusSlug}>{status}</div>
      </div>
      <button className="claim__button" onClick={navigateIncomingPost}>
        Browse
      </button>
    </div>
  );
};


