import { Action } from 'redux';
import {
    FETCH_ASSETS_SUCCESS,
    FILTER_ASSETS,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { GET_ASSETS } from 'gql/assets';
import { client } from 'utils/client';

export const fetchAssets = (
    pageSize: number
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const { data } = await client.query({
        query: GET_ASSETS,
        variables: {
            pageSize,
        }
    });

    dispatch({ type: FETCH_ASSETS_SUCCESS, payload: data.assets });
}

export const FilterAssetsAction = (key: string) => {
    return {
        type: FILTER_ASSETS,
        payload: key,
    };
}