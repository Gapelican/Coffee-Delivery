import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CheckForm = styled.div`
  display: flex;
  flex-direction: column;
  gap:0.75rem;
  width:40rem;

  .title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-600']}
  }
`
export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap:2px;
`
export const AddressFormContainer = styled.div`
  width:100%;
  display:grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap:1rem;
  grid-auto-flow:dense;
  padding-top: 2rem;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  padding-top: 2rem;
`
