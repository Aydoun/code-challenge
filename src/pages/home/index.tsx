import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Filter } from 'components/Filter';
import { useHistory } from 'react-router-dom';
import { GET_ASSETS } from 'gql/assets';
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
    const { loading, assets, error } = useSelector((state: RootState) => state.assets);
    const history = useHistory();

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Filter />
            <TableContainer>
                <BootstrapTable
                    keyField='id'
                    columns={columns}
                    data={assets}
                    bordered={false}
                    hover
                    rowStyle={{ cursor: 'pointer' }}
                    rowEvents={{
                        onClick: (t, r) => history.push('/' + r.id)
                    }}
                />
            </TableContainer>
        </>
    );
}