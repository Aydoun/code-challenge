import React from 'react';
import styled from 'styled-components/macro';
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
                <CardName>{name}</CardName>
                <CardPrice>{price}</CardPrice>
            </div>
        </SimpleCardContainer>
    );
}

export const DetailCard: React.FC<DetailsProps> = ({ data }) => {
    const { lastPrice, percentChange, lowPrice, highPrice } = data.ticker || {};

    return (
        <DetailsCardContainer>
            <p>{data.exchangeSymbol}</p>
            <FlexContainer>
                <div>
                    <div>{splitName(data.marketSymbol)}</div>
                    <div>Pair</div>
                </div>
                <div>
                    <div>{formatCurrency(lastPrice)}</div>
                    <div>Price</div>
                </div>
            </FlexContainer>
            <hr />
            <FlexContainer>
                <div>
                    <div>{formatCurrency(lastPrice)}</div>
                    <div>Price</div>
                </div>
                <div>
                    <div>{formatCurrency(percentChange, 'percent')}</div>
                    <div>24h change</div>
                </div>
                <div>
                    <div>{formatCurrency(lowPrice)}</div>
                    <div>24h Low</div>
                </div>
                <div>
                    <div>{formatCurrency(highPrice)}</div>
                    <div>24h High</div>
                </div>
            </FlexContainer>
        </DetailsCardContainer>
    );
}