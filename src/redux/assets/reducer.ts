import {
    AssetActionTypes,
    FETCH_ASSETS,
    FETCH_ASSETS_SUCCESS,
    FILTER_ASSETS,
} from './types';

const initialState: IAssetResponse = {
    assets: [],
    filteredAssets: [],
    loading: true,
    error: false,
};

export function AssetsReducer(
    state = initialState,
    action: AssetActionTypes
): IAssetResponse {
    switch (action.type) {
        case FETCH_ASSETS:
            return { ...state, loading: true };
        case FETCH_ASSETS_SUCCESS:
            return { ...state, loading: false, assets: action.payload };
        case FILTER_ASSETS: {
            const { payload } = action;
            const filtered = state.assets.filter(item => payload && item.assetName.includes(payload));
            return { ...state, filteredAssets: filtered };
        }
        default:
            return state;
    }
}