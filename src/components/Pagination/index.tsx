import React from 'react';
import styled from 'styled-components/macro';

const PaginationContainer = styled.div`
    padding: 15px 30px;
    li {
        cursor: pointer;
    }
`;

interface CardProps {
    price: string;
    name: string;
}

export const Pagination: React.FC<any> = ({ onClick, currentPage }) => {
    return (
        <PaginationContainer>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <span>View</span>
                    <li className={`page-item ${currentPage === 25 && 'active'}`} onClick={onClick(25)}>
                        <a className="page-link" >25</a>
                    </li>
                    <li className={`page-item ${currentPage === 30 && 'active'}`}>
                        <a className="page-link">30</a>
                    </li>
                    <li className="page-item" >
                        <a className="page-link">All</a>
                    </li>
                </ul>
            </nav>
        </PaginationContainer>
    );
}