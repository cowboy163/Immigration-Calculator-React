import styled from "styled-components";

const StyledSubTable1 = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tbody {
    border: none;

    tr {
      border: none !important;
      td {
        background: ${(props) => (props.bgColor? props.bgColor:"white")};
        border: var(--border);
        &:first-child {
          border-left: none !important;
        }
        
        &:last-child {
          border-right: none !important;
        }
      }
      
      &:first-child {
        td {
          border-top: ${props => props.borderFix? "1px solid black":"none"};
          //border-top: none !important;
        }
      }

      &:last-child {
        td {
          border-bottom: none !important;
        }
      }
    }
  }
`
export default StyledSubTable1
