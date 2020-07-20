import { Params, FETCH_ASSETS, AssetActionTypes } from './types'

export function fetchAssets(newParams: Params): AssetActionTypes {
    return {
        type: FETCH_ASSETS,
        payload: newParams
    }
}
