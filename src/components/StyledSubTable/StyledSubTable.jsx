import styled from "styled-components";

const StyledSubTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;

  tbody {
    border: none;

    tr {
      border: none !important;

      td {
        background: ${(props) => (props.bgColor? props.bgColor:"white")};
        &:first-child {
          border-left: none !important;
        }
        
        &:last-child {
          border-right: none !important;
        }
      }
      
      &:first-child {
        td {
          border-top: none !important;
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
export default StyledSubTable
