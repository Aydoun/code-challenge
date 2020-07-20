import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAssets } from 'redux/assets/action';

interface MainProps {
    children: React.ReactNode;
}

// @ts-ignore
export const Main: React.FC<MainProps> = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAssets(25));
    }, []);

    return children;
}