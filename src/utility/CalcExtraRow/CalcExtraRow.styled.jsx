import styled from "styled-components";

const CalcExtraRowStyled = styled.table`
  border-spacing: 0;
  width: 100%;
  background: ${props => props.bgColor? props.bgColor : "white"};

  .extraLine {
    border-left: var(--border);
    border-bottom: var(--border);
    border-right: var(--border);
  }
`
export default CalcExtraRowStyled