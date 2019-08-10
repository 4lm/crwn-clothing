import { SET_CURRENT_USER } from 'redux/actionTypes';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
