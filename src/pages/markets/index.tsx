import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { SimpleCard } from 'components/Card';
import { Row, Column } from 'components/Grid';
import { Title } from 'components/Text';
import { useParams, Link } from 'react-router-dom';
import _groupBy from 'lodash.groupby';
import _get from 'lodash.get';
import { formatCurrency, splitName } from 'utils';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Markets: React.FC = () => {
    const { symbolId } = useParams();
    const { loading, assets, error } = useSelector((state: RootState) => state.assets);
    const GroupedAssets = useMemo(
        () => {
            if (assets.length === 0) return {};
            const filtered = assets.find((item: any) => item.id === symbolId);
            return _groupBy(filtered!.markets, 'exchangeSymbol');
        }, [symbolId, assets]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <>
            {Object.keys(GroupedAssets).map((item: string) => {
                const cards = GroupedAssets[item].map(asset =>
                    <Column key={asset.marketSymbol}>
                        <StyledLink to={`/${symbolId}/${encodeURIComponent(asset.marketSymbol)}`}>
                            <SimpleCard
                                name={splitName(asset.marketSymbol)}
                                price={formatCurrency(_get(asset, 'ticker.lastPrice', ''))}
                            />
                        </StyledLink>
                    </Column>
                )
                return (
                    <React.Fragment key={item}>
                        <Title>{item}</Title>
                        <Row>{cards}</Row>
                    </React.Fragment>
                )
            })}
        </>
    );
}