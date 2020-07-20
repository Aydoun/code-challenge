import React, { useState, memo } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FilterAssetsAction } from 'redux/assets/action';
import { Title } from 'components/Text';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #eaeaea;
  padding: 10px;
  outline: none;
  background: white;
  height: 36px;
  width: 210px;
  font-size: 13px;
  border-radius: 12px;
`;

const AppTitle = styled(Title)`
    line-height: 2.3em;
`;

export const Filter: React.FC = memo(() => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  return (
    <>
      <FilterContainer>
        <StyledLink to="/"><AppTitle>Cryptocurrency Market</AppTitle></StyledLink>
        <Input
          value={value}
          onChange={e => {
            setValue(e.target.value);
            dispatch(FilterAssetsAction(e.target.value))
          }}
          placeholder="Search..."
          type="search"
        />
      </FilterContainer>
    </>
  );
});
