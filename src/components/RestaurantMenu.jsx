import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const name = useParams().resName;
  const [showIndex, setShowIndex] = useState(0);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <h2>Menu</h2>
      {resInfo?.map((item) => {
        const title = item?.card?.card?.title;
        return (
          <RestaurantCategory
            key={title}
            data={item.card.card}
            showItems={showIndex === title}
            setShowIndex={setShowIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
