import "@pages/Error/NotFound.scss";
import poster from "@img/poster-home.png";

export const NotFound = () => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__poster">
          <img src={poster} alt="poster"/>
        </div>
        <span className="error__number">404</span>
        <p className="error__text">page not found</p>
      </div>
    </div>
  );
};

