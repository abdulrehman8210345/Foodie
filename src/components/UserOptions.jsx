// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMultiUser, setNumberOfUsers } from '../redux/actions';

const UserOptions = () => {
  const dispatch = useDispatch();
  const isMultiUser = useSelector((state) => state.rootReducer.isMultiUser);
  const numberOfUsers = useSelector((state) => state.rootReducer.numberOfUsers);

  return (
    <div className="p-8 border-4 rounded">
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={isMultiUser}
          onChange={() => dispatch(toggleMultiUser())}
          className="mr-2"
        />
        Multi-User
      </label>
      {isMultiUser && (
        <div>
          <label className="flex items-center">
            Number of Users:
            <input
              className="border ml-2 px-2 py-1 rounded"
              type="number"
              value={numberOfUsers}
              onChange={(e) => dispatch(setNumberOfUsers(e.target.value))}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
