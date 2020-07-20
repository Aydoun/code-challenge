import {
    AssetActionTypes,
    FETCH_ASSETS,
} from './types'

const initialState: IAssetsState = {
    id: '',
    assetName: '',
    assetSymbol: '',
    marketCap: 0,
    markets: [],
    loading: false,
    error: false,
};

export function AssetsReducer(
    state = initialState,
    action: AssetActionTypes
): IAssetsState {
    switch (action.type) {
        case FETCH_ASSETS:
            return state;
        default:
            return state
    }
}