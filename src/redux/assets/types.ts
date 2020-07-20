export const FETCH_ASSETS = 'FETCH_ASSETS';

export interface Params {
    page?: number;
}

interface FetchAssetsAction {
    type: typeof FETCH_ASSETS,
    payload: Params
}

export type AssetActionTypes = FetchAssetsAction;