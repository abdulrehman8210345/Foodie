// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSplitMethod, setCustomSplits } from '../redux/actions';

const SplitBill = () => {
  const dispatch = useDispatch();
  const splitMethod = useSelector((state) => state.rootReducer.splitMethod);
  const numberOfUsers = useSelector((state) => state.rootReducer.numberOfUsers);
  const customSplits = useSelector((state) => state.rootReducer.customSplits);
  const totalBill = useSelector((state) => state.rootReducer.cart).reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handleCustomSplitChange = (index, amount) => {
    const newSplits = [...customSplits];
    newSplits[index] = amount;
    dispatch(setCustomSplits(newSplits));
  };

  return (
    <div className="p-14 border-4 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Split Bill</h2>
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value="equal"
            checked={splitMethod === 'equal'}
            onChange={() => dispatch(setSplitMethod('equal'))}
            className="mr-2"
          />
          Divide Equally
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="custom"
            checked={splitMethod === 'custom'}
            onChange={() => dispatch(setSplitMethod('custom'))}
            className="mr-2"
          />
          Custom Split
        </label>
      </div>
      {splitMethod === 'equal' && (
        <div className='font-bold mt-2 float-end'>
          Each User Pays: Rs.{(totalBill / numberOfUsers).toFixed(2)}
        </div>
      )}
      {splitMethod === 'custom' &&
        Array.from({ length: numberOfUsers }).map((_, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              User {index + 1}:
              <input
                className="border ml-2 px-2 py-1 rounded"
                type="number"
                value={customSplits[index] || ''}
                onChange={(e) => handleCustomSplitChange(index, e.target.value)}
              />
            </label>
          </div>
        ))}
    </div>
  );
};

export default SplitBill;
