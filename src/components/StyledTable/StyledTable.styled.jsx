import styled from "styled-components";

const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--bodyBg2);
  border: var(--border);
  
  tr {
    width: 100%;
    
    &:nth-child(2n) {
      border: var(--border);
      background: var(--bodyBg1); 
    }

    th {
      width: 100%;
      background: var(--titleBg);
    }

    td {
      border: var(--border);
      
      &:nth-child(1) {
        width: 20%;
      }
      
      &:nth-child(2) {
        width: 70%;
      }
      
      &:nth-child(3) {
        width: 10%;
      }
    }
  }
  

  
`
export default STable