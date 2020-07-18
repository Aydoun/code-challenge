import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_MARKET } from 'gql/assets';

export const Home: React.FC = () => {
    const { loading, error, data } = useQuery(GET_MARKET);
    return loading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>;
}