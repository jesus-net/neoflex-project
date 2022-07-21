import React, { useEffect } from "react";
import "@components/ClaimList/ClaimList.scss";

import { useSelector, useDispatch } from "react-redux";
import {Claim} from "@components/ClaimList/Claim/Claim";
import { getClaims } from "@action/action.homeSlice";
import {setSortData} from "@slice/homeSlice";
import vectorTop from "@img/icon-vector-top.svg";
import vectorBottom from "@img/icon-vector-bottom.svg";
import { nanoid } from "nanoid";

export const ClaimList = () => {
  const dispatch = useDispatch();
  const claims = useSelector((state) => state.home.claims);
  const isFetching = useSelector((state) => state.home.isFetching);

  const startCount = useSelector((state) => state.home.startCount);
  const limitCount = useSelector((state) => state.home.limitCount);
  const currentPage = useSelector((state) => state.home.currentPage);

  const sort = useSelector((state) => state.home.sort);
  const title = useSelector((state) => state.home.title);

  const getQueryClaims = () =>
    dispatch(
      getClaims({
        current: startCount,
        limit: limitCount,
        column: title,
        sort: sort,
      })
    );
  useEffect(() => {
    getQueryClaims();
  }, [currentPage, sort]);
  const titleFilter = [
    { text: "Title", name: "title" },
    { text: "Created", name: "createdAt" },
    { text: "Type", name: "type" },
    { text: "Status", name: "status" }
  ];
  return (
    <div className="claims-list">
      <div className="claims-list__filters">
        {titleFilter.map((title) => (
          <div className="claims-list__item" key={nanoid()}>
            <div
              className="claims-list__filter"
              onClick={() => dispatch(setSortData({title: title.name, sort: sort}))}
            >
              {title.text}
            </div>
            <div className="claims-list__buttons">
              <button className="claims-list__button">
                <img src={vectorTop}></img>
              </button>
              <button className="claims-list__button">
                <img src={vectorBottom}></img>
              </button>
            </div>
          </div>
        ))}
         <div className="claims-list__item">
            <div className="claims-list__filter">Action</div>
            </div>
          </div>
      {isFetching === false ? (
        claims.map((item) => (
          <Claim
            key={item["_id"]}
            id={item["_id"]}
            title={item.title}
            created={item.updatedAt.slice(0, 10).split("-").reverse().join("/")}
            type={item.type ? item.type.name : null}
            typeSlug={item.type ? item.type.slug : null}
            status={item.status ? item.status.name : null}
            statusSlug={item.status ? item.status.slug : null}
          />
        ))
      ) : (
        <div className="load-wrapp">
          <div className="load">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      )}
    </div>
  );
};
