import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAssets } from 'redux/assets/action';

export const Main: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAssets(25));
    }, [dispatch]);

    return null;
}