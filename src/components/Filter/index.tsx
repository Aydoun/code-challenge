import React, { useState } from 'react';
import styled from 'styled-components/macro';


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  outline: none;
  background: white;
`;

export const TableTitle = styled.span`
  font-weight: bold;
`;

export const Filter: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <FilterContainer>
                <TableTitle>Stock Market</TableTitle>
                <Input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Symbol name (ex. Bitcoin)"
                    type="search"
                />
            </FilterContainer>

        </>
    );
};
