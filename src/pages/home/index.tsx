import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssets } from 'redux/assets/action';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import { Pagination } from 'components/Pagination';
import { formatCurrency, averagePrices } from 'utils';

const columns = [{
    dataField: 'assetName',
    text: 'Name',
}, {
    dataField: 'assetSymbol',
    text: 'Pair',
    formatter: (cell: string) => cell + '/USD',
}, {
    dataField: 'marketCap',
    text: 'Market Cap',
    formatter: (cell: number) => formatCurrency(cell),
},
{
    dataField: 'markets',
    text: 'Average Last Price',
    formatter: (cell: IMarket[]) => {
        const average = averagePrices(
            (cell.map((item: IMarket) => {
                if (item.ticker && item.marketSymbol.includes('USD')) {
                    return parseFloat(item.ticker.lastPrice)
                }
                return null;
            }).filter(Boolean) as number[])
        );
        return formatCurrency(average);
    },
}];

export const TableContainer = styled.div`
    background: white;
`;

export const Home: React.FC = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(25);
    const { loading, assets, filteredAssets, error } = useSelector((state: RootState) => state.assets);
    const history = useHistory();

    const onClick = (page: number) => () => {
        setCurrentPage(page);
        dispatch(fetchAssets(page));
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>

    return (
        <>
            <TableContainer>
                <BootstrapTable
                    keyField='id'
                    columns={columns}
                    data={filteredAssets.length === 0 ? assets : filteredAssets}
                    bordered={false}
                    hover
                    rowStyle={{ cursor: 'pointer' }}
                    rowEvents={{
                        onClick: (t, r) => history.push('/' + r.id)
                    }}
                    headerClasses="assets__table-header"
                />
                <Pagination onClick={onClick} currentPage={currentPage} />
            </TableContainer>
        </>
    );
}