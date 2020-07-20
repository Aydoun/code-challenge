import {
    Reducer,
    Store,
    applyMiddleware,
    compose,
    createStore as createReduxStore,
    combineReducers
} from 'redux';
import Thunk from 'redux-thunk';
import { AssetActionTypes } from './assets/types';
import { AssetsReducer } from './assets/reducer';

const rootReducer = combineReducers({
    assets: AssetsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(Thunk);

const createStore = (
    rootReducer: Reducer<RootState, AssetActionTypes>,
): Store<RootState, AssetActionTypes> => {
    const store = createReduxStore(rootReducer, composeEnhancers(middlewares));

    return store;
};

export const store = createStore(rootReducer);
