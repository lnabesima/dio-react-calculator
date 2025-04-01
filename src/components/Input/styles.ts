import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAFFAA;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    // this is very ugly
    // TODO: check if nesting components like this is the industry standard; if not, refactor it accordingly 
    input{
        width: 100%;
        height: 75px;
        background-color: #AAFFAA;
        border: none;
        
        font-size: 24px;
        font-family: "Roboto", sans-serif;
        
        text-align: right;
        padding: 0 8px;
        // I know, I know, this is such accessibility problem, but the outline is just so ugly and
        // this project won't have any practical use besides study so I'm giving me the liberty of 
        // removing the outline.
        outline: none;
    }
    
`