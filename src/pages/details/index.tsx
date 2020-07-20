import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import { Filter } from 'components/Filter';
import { DetailCard } from 'components/Card';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_MARKET } from 'gql/assets';

export const Details: React.FC = () => {
    const { symbolId, symbol } = useParams();
    const { loading, data } = useQuery(GET_MARKET);
    const decodedSymbol = decodeURIComponent(symbol);
    if (loading) return null;

    const foundSymbol = data.assets.find((item: any) => item.id === symbolId);
    const foundDetails = foundSymbol.markets.find((item: any) => item.marketSymbol === decodedSymbol);

    return (
        <>
            <Filter />
            <DetailCard data={foundDetails} />
        </>
    );
}