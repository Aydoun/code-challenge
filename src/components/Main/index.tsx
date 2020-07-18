import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_MARKET } from 'gql/assets';

// @ts-ignore
export const Main: React.FC = ({ children }) => {
    const { loading, error, data } = useQuery(GET_MARKET);
    return loading ? <p>Loading...</p> : <div>{ children }</div>;
}