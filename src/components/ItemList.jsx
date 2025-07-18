import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export default function ItemList({ items, showQuantity = false }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item.itemData || item)); // handle both formats
  };

  return (
    <div>
      {items.map((itemWrapper) => {
        const item = itemWrapper.itemData || itemWrapper; // normalize format
        const id = item.card.info.id;
        const name = item.card.info.name;
        const price = item.card.info.price || item.card.info.defaultPrice;
        const imageId = item.card.info.imageId;

        return (
          <div
            key={`${id}-${showQuantity ? itemWrapper.quantity : Math.random()}`}
            className='p-2 m-2 border-gray-200 border-b-2 text-left justify-between flex'
          >
            <div className='w-9/12'>
              <div className='py-2'>
                <span>{name} - ₹{price / 100}</span>
                {showQuantity && (
                  <span className="ml-2 text-sm text-gray-500">
                    x {itemWrapper.quantity}
                  </span>
                )}
              </div>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className='w-3/12 p-4 relative'>
              <img
                className='rounded-lg'
                src={CDN_URL + imageId}
                alt={name}
              />
              <div className="absolute bottom-0 left-0 right-0">
                <button
                  className='p-2 bg-white rounded-b-lg shadow-lg m-auto block'
                  onClick={() => handleAddItem(itemWrapper)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
