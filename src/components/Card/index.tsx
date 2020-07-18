import React from 'react';
import styled from 'styled-components/macro';

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

interface CardProps {
    price: string;
    name: String;
}

export const SimpleCard: React.FC<CardProps> = ({ price, name }) => {
    return (
        <SimpleCardContainer>
            <div>
                <CardName>{name}</CardName>
                <CardPrice>{price}</CardPrice>
            </div>
        </SimpleCardContainer>
    );
}

export const DetailCard = () => { }