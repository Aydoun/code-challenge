import React from 'react';
import styled from 'styled-components/macro';
import { Title } from 'components/Text';

const PaginationContainer = styled.div`
    padding: 15px 30px;
    li {
        cursor: pointer;
    }
`;

const ViewTitle = styled(Title)`
    margin-right: 10px;
    margin-top: 6px;
    font-weight: normal;
`;

interface PagerProps {
    currentPage: number;
    onClick: (page: number) => any
}

export const Pagination: React.FC<PagerProps> = ({ onClick, currentPage }) => {
    return (
        <PaginationContainer>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <ViewTitle>View</ViewTitle>
                    <li className={`page-item ${currentPage === 25 && 'active'}`} onClick={onClick(25)}>
                        <a className="page-link" href="#" >25</a>
                    </li>
                    <li className={`page-item ${currentPage === 30 && 'active'}`}>
                        <a className="page-link" href="#" >30</a>
                    </li>
                    <li className="page-item" >
                        <a className="page-link" href="#" >All</a>
                    </li>
                </ul>
            </nav>
        </PaginationContainer>
    );
}