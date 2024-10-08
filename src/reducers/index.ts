import { combineReducers } from 'redux'

import cartReducer from './cartReducer';
// import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
//   users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer