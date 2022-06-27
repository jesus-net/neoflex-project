import "@components/Pagination/Pagination.scss";
import iconPrev from "@img/icon-prev-pagination.svg";
import iconNext from "@img/icon-next-pagination.svg";
const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <a href="#" className="pagination__link pagination__link--prev">
            <img src={iconPrev} alt="icon prev" />
          </a>
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">
            1
          </a>
        </li>
        <li className="pagination__item pagination__item--hidden"></li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">
            4
          </a>
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">
            5
          </a>
        </li>
        <li className="pagination__item pagination__item--active">
          <a href="" className="pagination__link">
            6
          </a>
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">
            7
          </a>
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">
            8
          </a>
        </li>
        <li className="pagination__item pagination__item--hidden"></li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">
            50
          </a>{" "}
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link pagination__link--next">
            <img src={iconNext} alt="icon next" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
