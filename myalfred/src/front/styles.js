import styled from "styled-components"


export const GridListas = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); 
    gap: 1rem; 
    width: 100%; 
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1rem;
    text-align: "center";
    align-itens: "center";
    border-radius: 8px; 
`;
