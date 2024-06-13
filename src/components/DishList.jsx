// import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const dishes = [
  { name: 'Pizza', price: 800, url: "pizza.jpg" },
  { name: 'Burger', price: 350, url: "burger.jpg" },
  { name: 'Pasta', price: 400, url: "macroni.jpg" },
  { name: 'Fries', price: 100, url: "fries.jpg" },
  { name: 'Salad', price: 200, url: "salad.jpg" },
  { name: 'Drink', price: 250, url: "cold.jpg" },
];

const DishList = () => {
  const dispatch = useDispatch();

  return (
    <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10'>
      {dishes.map((dish, i) => (
        <div key={i} className="rounded-lg border-orange-300">
          <img
            src={dish.url}
            height={350}
            alt={dish.name}
            width={400}
            className="rounded-t-lg h-[250px] object-cover"
          />
          <div className="flex justify-between items-center p-6 bg-orange-100 rounded-b-lg">
            <div>
              <h2 className="text-[18px] font-medium">
                {dish.name}
              </h2>
              <h2 className="text-[14px] text-black flex gap-2">
                Rs. {dish.price}
              </h2>
            </div>
            <button
              className="bg-orange-500 text-white px-2 py-1 rounded"
              onClick={() => dispatch(addToCart(dish))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishList;
