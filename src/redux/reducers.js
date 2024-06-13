import { combineReducers } from 'redux';

const initialState = {
  cart: [],
  isMultiUser: false,
  numberOfUsers: 1,
  splitMethod: 'equal',
  customSplits: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'UPDATE_CART':
      return { ...state, cart: action.payload };
    case 'TOGGLE_MULTI_USER':
      return { ...state, isMultiUser: !state.isMultiUser };
    case 'SET_NUMBER_OF_USERS':
      return { ...state, numberOfUsers: action.payload };
    case 'SET_SPLIT_METHOD':
      return { ...state, splitMethod: action.payload };
    case 'SET_CUSTOM_SPLITS':
      return { ...state, customSplits: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ rootReducer });
