import styled from "styled-components";

export const ContCoffee = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  justify-content: center;

  background: ${(props) => props.theme['gray-100']};

  border-radius: 6px 36px;
  padding: 20px;

  text-align: center;

  max-width:256px;

  img {
    width: 120px;
    height:120px;
    margin: auto;
    margin-top: -45px;
  }

  .content-type-coffee {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 20px auto;

    .type-coffee {
      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['orange-100']};
      font-size: 0.625rem;
      text-transform: uppercase;
      font-weight: 700;
      padding: 5px 10px;
      border-radius: 20px;
      width: fit-content;
    }
  }

  .coffee-name {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-400']};

    text-align: center;
  }

  .content-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap:10px;
    margin-top: 20px;

    .price {
      color: ${(props) => props.theme['gray-800']};
      font-weight: 900;
      font-family: 'Baloo 2';
      font-size: 1.5rem;

      span {
        font-size: 0.875rem;
        margin-right: 5px;
        font-weight: normal;
        font-family: 'Roboto Mono';
      }
    }

    .cont-info {
      display: flex;
      align-items: center;
      gap: 8px;
      

      .quantity-items {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 38px;
        

        padding: 0 14px;
        border-radius: 6px;
        background: ${(props) => props.theme['gray-200']};

        button {
          color: ${(props) => props.theme['purple-400']};
          font-size:20px;
          appearance: none;
          border: 0;
          background: transparent;
          cursor: pointer;

          img {
            width: 14px;
            height: 14px;
          }
        }

        input[type="number"] {
          -moz-appearance: textfield;
          color: ${(props) => props.theme['gray-600']};
          font-size:16px;
          background: transparent;
          width: 20px;
          border: 0;
          text-align: center;
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

  
       
      }

      .cart {
        color: ${(props) => props.theme['white']};
        background: ${(props) => props.theme['purple-400']};
        border-radius: 6px;
        height: 38px;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
      }

    }
  }

  
  
`