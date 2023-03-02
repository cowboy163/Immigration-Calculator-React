import styled from "styled-components";

const StyledHeader = styled.header`
    .navBar {
      border-bottom: var(--line);
      padding: 1rem 0;
      display: flex;
      justify-content: space-evenly;
      
      .navItem {
        padding: 0.5rem 1.5rem;
        
        &:hover {
          background: var(--titleBg);
          color: white;
        }
        
        &:active {
          transform: scale(0.9);
        }
      }
    }
`
export default StyledHeader