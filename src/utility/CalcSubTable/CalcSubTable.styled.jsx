import styled from "styled-components";

const CalcSubTableStyled = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: calc(100% + 2px);
  margin-left: -1px;
  
  .calcSubTableRow {
    .calcSubTableCol {
      //border: var(--border);
      border-top: var(--border);
      //border-left: var(--border);
      border-right: var(--border);
      border-bottom: var(--border);
      padding: 0.6rem 0.3rem;
    }
    &:first-child {
      .calcSubTableCol {
        border-top: none;
      }
    } 
    &:last-child {
      .calcSubTableCol {
        border-bottom: none;
      }
    }
  }
`
export default CalcSubTableStyled