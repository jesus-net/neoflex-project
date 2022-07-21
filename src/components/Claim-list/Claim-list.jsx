import React, { useState, useEffect } from "react";
import "@components/Claim-list/Claim-list.scss";

import { useSelector, useDispatch } from "react-redux";
import Claim from "@components/Claim-list/Claim/Claim";
import { getClaims } from "@action/action.homeSlice";

const ClaimList = () => {
  const dispatch = useDispatch();
  const claims = useSelector((state) => state.home.claims);
  const isFetching = useSelector((state) => state.home.isFetching);
  const startCount = useSelector((state) => state.home.startCount);
  const currentPage = useSelector((state) => state.home.currentPage);
  const limitCount = useSelector((state) => state.home.limitCount);
  useEffect(() => {
    dispatch(getClaims({current: startCount, limit: limitCount}));
  }, [currentPage]);

  return (
    <div className="claims-list">
      <div className="claims-list__filters">
        <div className="claims-list__item">
          <div className="claims-list__filter">Title</div>
        </div>
        <div className="claims-list__item">
          <div className="claims-list__filter">Created</div>
        </div>
        <div className="claims-list__item">
          <div className="claims-list__filter">Type</div>
        </div>
        <div className="claims-list__item">
          <div className="claims-list__filter">Status</div>
        </div>
        <div className="claims-list__item">
          <div className="claims-list__filter">Actions</div>
        </div>
      </div>
      {isFetching === false ? (
        claims.map((item) => (
          <Claim
            key={item["_id"]}
            id={item["_id"]}
            title={item.title}
            created={item.updatedAt.slice(0, 10).split('-').reverse().join('/')}
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

export default ClaimList;
