import styledComponents from "styled-components";

export const StyledTetrisWrapper = styledComponents.div`
    width: 100vw;
    overflow: hidden;
`;

export const StyledTetris = styledComponents.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;
    background: #000;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`;
