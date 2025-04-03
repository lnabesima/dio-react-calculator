import styled from 'styled-components';

export const StyledButton  = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    color: #fff;
    background-color: #00AAFA;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: opacity 0.1s ease-in-out;
    
    &:hover{
        opacity: 0.8;
    }
    
    &:active {
        opacity: 0.6;
    }
`