import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  max-width: 1120px;
  margin:auto;

  display:flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap:15px;

    .location {
      font-size:0.875rem;
      display: flex;
      align-items: center;
      gap:5px;
      padding:8px;
      background: ${(props) => props.theme['purple-100']};
      border-radius:6px;

      color: ${(props) => props.theme['purple-300']};
      
    }

    .cart {
      padding: 8px;
      background: ${(props) => props.theme['yellow-100']};
      border-radius:6px;
      color: ${(props) => props.theme['yellow-200']};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
`     