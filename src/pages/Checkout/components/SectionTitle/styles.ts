import styled from "styled-components";


export const SectionTittleContainer = styled.div`
  display:flex;
  gap:0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-200']};
  }
  
  .dollar {
    color: ${(props) => props.theme['purple-300']};
  }

  div {
    color: ${(props) => props.theme['gray-600']};
    font-size:1rem;
    font-weight:500;
  }

  .subtitle-section {
    font-size:.875rem;
    margin-top:2px;
  }
`