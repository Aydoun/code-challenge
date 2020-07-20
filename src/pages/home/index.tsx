import React from 'react';
import styled from 'styled-components/macro';
import { Filter } from 'components/Filter';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_MARKET } from 'gql/assets';
import BootstrapTable from 'react-bootstrap-table-next';
import { formatCurrency, averagePrices } from 'utils';

const columns = [{
    dataField: 'assetName',
    text: 'Name'
}, {
    dataField: 'assetSymbol',
    text: 'Pair',
    formatter: (cell: string) => cell + '/USD'
}, {
    dataField: 'marketCap',
    text: 'Market Cap',
    formatter: (cell: number) => formatCurrency(cell)
},
{
    dataField: 'markets',
    text: 'Average Last Price',
    formatter: (cell: string[]) => {
        const average = averagePrices(
            (cell.map(item => {
                // @ts-ignore
                if (item.ticker && item.marketSymbol.includes('USD')) {
                    // @ts-ignore
                    return parseFloat(item.ticker.lastPrice)
                }
            }).filter(Boolean) as number[])
        );

        return formatCurrency(average);
    }
}];

export const TableContainer = styled.div`
    background: white;
`;

export const Home: React.FC = () => {
    const history = useHistory();
    const { loading, data } = useQuery(GET_MARKET);
    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Filter />
            <TableContainer>
                <BootstrapTable
                    keyField='id'
                    columns={columns}
                    data={data.assets}
                    bordered={false}
                    hover
                    rowStyle={{ cursor: 'pointer' }}
                    rowEvents={{
                        onClick: (t, r) => history.push('/' + r.id)
                    }}
                />
            </TableContainer>
        </>
    )
}