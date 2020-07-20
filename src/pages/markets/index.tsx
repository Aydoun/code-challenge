import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import { Filter } from 'components/Filter';
import { SimpleCard } from 'components/Card';
import { useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { GET_MARKET } from 'gql/assets';
import _groupBy from 'lodash.groupby';
import _get from 'lodash.get';
import { formatCurrency, splitName } from 'utils';

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.p`
    font-weight: bold;
`;

export const Markets: React.FC = () => {
    const history = useHistory();
    const { symbolId } = useParams();
    const { loading, data } = useQuery(GET_MARKET);
    const GroupedAssets = useMemo(
        () => {
            if (!data) return {};
            const filtered = data.assets.find((item: any) => item.id === symbolId);
            return _groupBy(filtered.markets, 'exchangeSymbol');
        }, [symbolId, data]);
    const CardClick = (symbolId: string, marketSymbol: string) => () => {
        history.push(`/${symbolId}/${encodeURIComponent(marketSymbol)}`);
    }

    if (loading) return null;

    return (
        <>
            <Filter />
            {Object.keys(GroupedAssets).map((item: string) => {
                const cards = GroupedAssets[item].map(asset =>
                    <SimpleCard
                        name={splitName(asset.marketSymbol)}
                        price={formatCurrency(_get(asset, 'ticker.lastPrice', ''))}
                        onClick={CardClick(symbolId, asset.marketSymbol)}
                    />
                )
                return (
                    <>
                        <Title>{item}</Title>
                        <CardsContainer>{cards}</CardsContainer>
                    </>
                )
            })}
        </>
    );
}