import {
    AssetActionTypes,
    FETCH_ASSETS,
    FETCH_ASSETS_SUCCESS
} from './types';

const initialState: IAssetResponse = {
    assets: [],
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
        default:
            return state;
    }
}