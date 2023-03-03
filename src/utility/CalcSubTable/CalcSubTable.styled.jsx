import styled from "styled-components";

const CalcSubTableStyled = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: calc(100% + 2px);
  margin-left: -1px;
  margin-top: -1px;
  
  .calcSubTableRow {
    .calcSubTableCol {
      border: var(--border);
    }
    
    &:last-child {
      .calcSubTableCol {
        border-bottom: none;
      }
    }
  }
`
export default CalcSubTableStyled