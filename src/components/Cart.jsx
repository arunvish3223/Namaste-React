import React from 'react';
import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';


export default function cart() {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-3xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button 
          className='bg-black p-2 m-2 text-white rounded-lg'
          onClick={handleClearCart}>Clear Cart</button>
          {cartItems.length === 0 && <h1>Cart is empty!<br/>Add items to the cart!</h1>}
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}
