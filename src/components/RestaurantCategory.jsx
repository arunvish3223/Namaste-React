import React from 'react';
import ItemList from './ItemList';

export default function RestaurantCategory({ data, showItems, setShowIndex }) {
  const handleClick = () => {
    setShowIndex(prev => (showItems ? null : data.title));
  };

  return (
    <div>
      <div className='w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
          <span className='font-bold text-lg'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}
