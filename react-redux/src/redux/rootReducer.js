import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer';
import IceCreamReducer from './iceCream/iceCreamReducer';

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})