import styled from 'styled-components/macro';

export const Title = styled.div<{ big?: boolean, color?: string }>`
    color: ${props => (props.color || 'black')};
    font-size: ${props => (props.big ? '1.6em' : '1em')};
    font-weight: bold;
    margin-bottom: 4px;
`;

export const SmallTitle = styled.div`
    color: #ccc;
    font-size: 0.8em;
`;
