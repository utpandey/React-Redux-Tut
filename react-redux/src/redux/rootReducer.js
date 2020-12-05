import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer';
import IceCreamReducer from './iceCream/iceCreamReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    user: userReducer
})