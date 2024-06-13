export const addToCart = (dish) => ({ type: 'ADD_TO_CART', payload: dish });
export const updateCart = (cart) => ({ type: 'UPDATE_CART', payload: cart });
export const toggleMultiUser = () => ({ type: 'TOGGLE_MULTI_USER' });
export const setNumberOfUsers = (num) => ({ type: 'SET_NUMBER_OF_USERS', payload: num });
export const setSplitMethod = (method) => ({ type: 'SET_SPLIT_METHOD', payload: method });
export const setCustomSplits = (splits) => ({ type: 'SET_CUSTOM_SPLITS', payload: splits });
