import "@components/Pagination/Pagination.scss";
import {useSelector, useDispatch} from "react-redux";
import {setCurrentPage, setStartCount} from "@slice/homeSlice";
import { Pagination, PaginationItem } from "@mui/material";

export const PaginationList = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.home.currentPage);

  const limitCount = useSelector((state) => state.home.limitCount);
  const totalCount = useSelector((state) => state.home.totalCount);
  const pagesCount = Math.ceil(totalCount / limitCount);
  return (
    <div className="pagination">
    <Pagination
        count={pagesCount}
        page={currentPage}
        variant="outlined" 
        shape="rounded"
        onChange = {(_, num) => {
          dispatch(setCurrentPage(num));
          dispatch(setStartCount(num));
        }}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              marginRight: "8px",
              fontFamily: "Inter-Regular",
              fontSize: "14px",
              lineHeight: "22px",
              width: "30px",
              height: "30px",
              border: "1px solid $gray25",
              borderRadius: "2px"
            }}
            {...item}
          />
        )}
      />
    </div>
  );
};
