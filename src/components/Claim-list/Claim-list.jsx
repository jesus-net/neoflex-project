import React, { useState, useEffect } from "react";
import "@components/Claim-list/Claim-list.scss";

import { useSelector, useDispatch } from "react-redux";
import Claim from "@components/Claim-list/Claim/Claim";
import { getClaims } from "@store/action.homeSlice";

const ClaimList = () => {
  const dispatch = useDispatch();
  const claims = useSelector((state) => state.home.claims);
  const isFetching = useSelector((state) => state.home.isFetching);

  useEffect(() => {
    dispatch(getClaims());
  }, []);

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
            title={item.title}
            created={item.updatedAt}
            type={item.type ? item.type.name : null}
            status={item.status ? item.status.name : null}
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
