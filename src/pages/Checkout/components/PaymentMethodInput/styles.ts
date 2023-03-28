import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-600']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  border-radius: 6px;
  height:3rem;
  border: 1px solid ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) => props.theme['purple-300']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-100']};
  }

  user-select: none;
`