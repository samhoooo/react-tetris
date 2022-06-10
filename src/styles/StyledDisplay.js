import styledComponents from "styled-components";

export const StyledDisplay = styledComponents.div`
    box-sizing: border-box;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red': '#fff')};
    background: #000;
    font-size: 0.8rem;
`;