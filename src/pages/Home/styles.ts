import styled from "styled-components";

export const MainConteiner = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  

  max-width:1120px;
  margin: 4rem auto; 
  

  .content {
    display:flex;
    align-items: center;
    gap: 60px;
    justify-content: center;

    .content-info {
      p {
        font-size:3rem;
        font-weight: 800;
        font-family: 'Baloo 2';
        color: ${(props) => props.theme['gray-800']};
        line-height: 3rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 1rem;
      }

      .text {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme['gray-600']};
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      }

      .cont-info {
        display: flex;
        flex-wrap:wrap;
        margin-top:4rem;

        .info {
          flex: 50%;
          display: flex;
          align-items: center;
          gap:8px;
          font-size:1rem;
          padding: 0.75rem 0;
          color: ${(props) => props.theme['gray-500']};


          img {
            flex:none;
            width: 32px;
          }
        }
      }
    }

    
  }

  .our-coffee {
    font-size:2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-800']};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    margin-top:6.75rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    padding: 40px 0
  }
`