// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../redux/actions';

const Cart = () => {
  const cart = useSelector((state) => state.rootReducer.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    dispatch(updateCart(newCart));
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span>{item.name} - ${item.price}</span>
            <input
              className="border px-2 py-1 rounded"
              type="number"
              value={item.quantity || 1}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
