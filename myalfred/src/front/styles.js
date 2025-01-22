import styled from "styled-components"


export const GridListas = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); 
    gap: 5rem;
    width: 100%;
    justify-content: center; /* Centraliza os itens horizontalmente */
    align-items: center; /* Centraliza os itens verticalmente */
    text-align: center;
    padding: 1rem;
    padding-bottom: 0px;
    border-radius: 8px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-content: center;
        height: 90vh;
    }
`;
