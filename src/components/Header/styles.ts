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
      position:relative;

      span {
        position: absolute;
        top:calc(-1.25rem / 2);
        right:calc(-1.25rem / 2);
        background: ${(props) => props.theme['yellow-200']};
        color: ${(props) => props.theme['white']};

        width: 1.25rem;
        height:1.25rem;
        border-radius: 50%;

        font-size:.75rem;
        font-weight:700;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  
`     