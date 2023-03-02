import styled from "styled-components";

const MainContStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--bodyBg2);
  border: var(--border);

  .styledRow {
    width: 100%;

    &:nth-child(2n + 1) {
      border: var(--border);
      background: var(--bodyBg1);
    }

    th {
      width: 100%;
      padding: 1rem 0.5rem;
      background: var(--titleBg);
    }

    .styledCol {
      border: var(--border);

      &:nth-child(1) {
        width: 20%;
        text-align: center;
      }

      &:nth-child(2) {
        width: 70%;
      }

      &:nth-child(3) {
        width: 10%;
        text-align: center;
      }
    }
  }
`
export default MainContStyled