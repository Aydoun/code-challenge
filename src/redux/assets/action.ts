import { Action } from 'redux';
import {
    FETCH_ASSETS,
    FETCH_ASSETS_SUCCESS,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { GET_ASSETS } from 'gql/assets';
import { client } from 'utils/client';

export const fetchAssets = (
    pageSize: number
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const { data } = await client.query({
        query: GET_ASSETS,
    });

    dispatch({ type: FETCH_ASSETS_SUCCESS, payload: data.assets });
}