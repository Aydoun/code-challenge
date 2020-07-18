import React from 'react';
// import { useQuery } from "@apollo/client";
// import { GET_MARKET } from 'gql/assets';

// @ts-ignore
export const Main: React.FC = props => {
    // const { loading, error, data } = useQuery(GET_MARKET);
    // // @ts-ignore
    // return loading ? <p>Loading...</p> : children(data);
    return props.children;
}