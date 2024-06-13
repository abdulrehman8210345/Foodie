// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../redux/actions';

const Cart = () => {
  const cart = useSelector((state) => state.rootReducer.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = parseInt(quantity, 10); // Ensure quantity is a number
    dispatch(updateCart(newCart));
  };

  const handleIncrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity === undefined) {
      newCart[index].quantity = 1; // Set quantity to 1 if undefined
    } else {
      newCart[index].quantity = parseInt(newCart[index].quantity || 0, 10) + 1; // Increment quantity by 1
    }
    // console.log('Increment:', newCart[index].quantity); // Debug log
    dispatch(updateCart(newCart));
  };
  

  const handleDecrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity = parseInt(newCart[index].quantity || 0, 10) - 1; // Ensure quantity is a number
      console.log('Decrement:', newCart[index].quantity); // Debug log
      dispatch(updateCart(newCart));
    }
  };

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    dispatch(updateCart(newCart));
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-screen max-w-xl border border-gray-600 bg-orange-300 px-4 py-8 sm:px-6 lg:px-8" aria-modal="true" role="dialog" tabIndex="-1">
        {cart.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600 text-lg">No cart items exist</p>
          </div>
        ) : (
          <div className="mt-4 space-y-6">
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-sm text-gray-900">{item.name}</h3>
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dd className="inline">Rs. {item.price}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-2">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                        onClick={() => handleDecrement(index)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="h-8 w-12 text-center border-t border-b border-gray-200 bg-gray-50 p-0 text-xs text-gray-600 focus:outline-none"
                      />
                      <button
                        type="button"
                        className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                        onClick={() => handleIncrement(index)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-gray-600 transition hover:text-red-600"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <span className="sr-only">Remove item</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
