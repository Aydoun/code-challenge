export const FETCH_ASSETS = 'FETCH_ASSETS';
export const FETCH_ASSETS_SUCCESS = 'FETCH_ASSETS_SUCCESS';

export interface Params {
    page?: number;
}

interface FetchAssetsAction {
    type: typeof FETCH_ASSETS,
    payload: Params
}

interface FetcAssetsSuccessAction {
    type: typeof FETCH_ASSETS_SUCCESS,
    payload: IAssetsState[]
}

export type AssetActionTypes = FetchAssetsAction | FetcAssetsSuccessAction;