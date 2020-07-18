import React from 'react';
import { Filter } from 'components/Filter';
import { useQuery } from '@apollo/client';
import { GET_MARKET } from 'gql/assets';
import styled from 'styled-components/macro';
import BootstrapTable from 'react-bootstrap-table-next';
import { formatCurrency, averagePrices } from 'utils';

const columns = [{
    dataField: 'assetName',
    text: 'Name'
}, {
    dataField: 'assetSymbol',
    text: 'Pair'
}, {
    dataField: 'marketCap',
    text: 'Market Cap',
    formatter: (cell: number) => formatCurrency(cell)
},
{
    dataField: 'markets',
    text: 'Average Last Price',
    formatter: (cell: string[]) => {
        return averagePrices(
            (cell.map(item => {
                // @ts-ignore
                if (item.ticker && item.marketSymbol.includes('USD')) {
                    // @ts-ignore
                    return parseFloat(item.ticker.lastPrice)
                }
            }).filter(Boolean) as number[])
        )
    }
}];

export const TableContainer = styled.div`
    background: white;
`;

export const Home: React.FC = () => {
    const { loading, error, data } = useQuery(GET_MARKET);
    if (loading) return <p>Loading...</p>;
    // console.log(data);
    return (
        <>
            <Filter />
            <TableContainer>
                <BootstrapTable
                    keyField='id'
                    columns={columns}
                    data={data.assets}
                    bordered={false}
                />
            </TableContainer>
        </>
    )
}