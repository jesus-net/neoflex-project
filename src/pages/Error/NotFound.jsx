import "@pages/Error/NotFound.scss";
import poster from "@img/poster-home.png";
const NotFound = () => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__pic">
          <img src={poster} alt="" width={600} height={600} />
        </div>
        <span className="error__number">404</span>
        <p className="error__text">page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
