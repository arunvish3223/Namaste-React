import { CDN_URL } from "../utils/constants";
import React from 'react'
import { useNavigate } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const navigate = useNavigate();
  const { id,name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resdata.info;
  const handleNavigate = () => {
    navigate(`/restaurant/${id}/${name}`);
  };

  return (
    <div className="m-4 p-4 w-[250px] rounded-b-lg bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigate()}>
      <img
        className="rounded-lg w-full h-40"
        alt="restaurant-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;