import styled from "styled-components"


export const GridListas = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* Ajusta automaticamente */
    gap: 2rem;
    width: 100%;
    justify-content: center;
    padding: 1rem;
    border-radius: 8px;
    justify-items: center;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
        align-content: start;
        height: 85vh;
    }
`;
