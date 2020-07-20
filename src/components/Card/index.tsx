import React from 'react';
import styled from 'styled-components/macro';
import { SmallTitle, Title } from 'components/Text';
import { Row, Column } from 'components/Grid';
import { formatCurrency, splitName } from 'utils';

const SimpleCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    width: 300px;
    height: 200px;
    margin-right: 30px;
    margin-bottom: 30px;
    background: white;
    cursor: pointer;
`;

const DetailsCardContainer = styled.div`
    padding: 30px;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    width: 600px;
    background: white;
`;

const CardName = styled.div`
    font-weight: bold;
    font-size: 22px;
`;

const CardPrice = styled.div`
    font-weight: bold;
    font-size: 22px;
    color: blue;
    margin-top: 10px;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface CardProps {
    price: string;
    name: string;
    onClick: any;
}

interface DetailsProps {
    data?: any;
}

export const SimpleCard: React.FC<CardProps> = ({ price, name, onClick }) => {
    return (
        <SimpleCardContainer onClick={onClick}>
            <div>
                <Title>{name}</Title>
                <Title big>{price}</Title>
            </div>
        </SimpleCardContainer>
    );
}

export const DetailCard: React.FC<DetailsProps> = ({ data }) => {
    const { lastPrice, percentChange, lowPrice, highPrice } = data.ticker || {};

    return (
        <DetailsCardContainer>
            <p>{data.exchangeSymbol}</p>
            <Row>
                <Column>
                    <Title big>{splitName(data.marketSymbol)}</Title>
                    <SmallTitle>Pair</SmallTitle>
                </Column>
                <Column>
                    <Title big>{formatCurrency(lastPrice)}</Title>
                    <SmallTitle>Price</SmallTitle>
                </Column>
            </Row>
            <hr />
            <Row>
                <Column>
                    <Title>{formatCurrency(lastPrice)}</Title>
                    <SmallTitle>Price</SmallTitle>
                </Column>
                <Column>
                    <Title>{formatCurrency(percentChange, 'percent')}</Title>
                    <SmallTitle>24h change</SmallTitle>
                </Column>
                <Column>
                    <Title>{formatCurrency(lowPrice)}</Title>
                    <SmallTitle>24h Low</SmallTitle>
                </Column>
                <Column>
                    <Title>{formatCurrency(highPrice)}</Title>
                    <SmallTitle>24h High</SmallTitle>
                </Column>
            </Row>
        </DetailsCardContainer>
    );
}