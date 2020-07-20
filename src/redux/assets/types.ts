export const FETCH_ASSETS = 'FETCH_ASSETS';
export const FETCH_ASSETS_SUCCESS = 'FETCH_ASSETS_SUCCESS';
export const FILTER_ASSETS = 'FILTER_ASSETS';

export interface Params {
    page?: number;
}

interface FetchAssetsAction {
    type: typeof FETCH_ASSETS,
    payload: Params,
}

interface FetchAssetsSuccessAction {
    type: typeof FETCH_ASSETS_SUCCESS,
    payload: IAssetsState[]
}

interface FilterAssetsAction {
    type: typeof FILTER_ASSETS,
    payload: string,
}

export type AssetActionTypes = FetchAssetsAction
    | FetchAssetsSuccessAction
    | FilterAssetsAction;