import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./CardOne.css";

const CardOne = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="boxImg0"> </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            <NavLink to="/calendar">
              <img src="./desk.png" className="boxImg" alt="..." />
            </NavLink>
          </h4>
          <div className="boxText">
            <span className="text-sm font-medium">Total views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
