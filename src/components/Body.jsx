import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from 'react';
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchtxt, setSearchtxt] = useState("");
  const [filteredRest, setfilteredRest] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4452268&lng=80.20703280000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurants(restaurants);
    setfilteredRest(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline, please check your internet connection</h1>;
  };
  return restaurants.length===0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchtxt}
          onChange={(e) => setSearchtxt(e.target.value)} />
          <button className="px-4 py-1 m-2 bg-green-100 rounded-lg" 
          onClick={()=>{

            const filteredres = restaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
            );
            setfilteredRest(filteredres);
          }}
          >
            Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-1 m-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredRes = restaurants.filter((item) => item.info.avgRating >= 4.5);
            setfilteredRest(filteredRes);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRest?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;