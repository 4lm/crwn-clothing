import { SET_CURRENT_USER } from 'redux/types';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
