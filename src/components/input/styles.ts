import styled from "styled-components";


export const InputStyleContainer = styled.input`
  height:2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-200']};
  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme['gray-100']};
  }

  color: ${(props) => props.theme['gray-400']};
  font-size: 0.75rem;
  padding:0 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }


`;