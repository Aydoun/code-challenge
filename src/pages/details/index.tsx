import React from 'react';
import { useSelector } from 'react-redux';
import { DetailCard } from 'components/Card';
import { useParams } from 'react-router-dom';

export const Details: React.FC = () => {
    const { symbolId, symbol } = useParams();
    const { loading, assets, error } = useSelector((state: RootState) => state.assets);
    const decodedSymbol = decodeURIComponent(symbol);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const foundSymbol = assets!.find((item: IAssetsState) => item.id === symbolId);
    const foundDetails = foundSymbol!.markets.find((item: IMarket) => item.marketSymbol === decodedSymbol);

    return <DetailCard data={foundDetails!} />
}