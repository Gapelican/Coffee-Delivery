import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
    }
    
    body {
        background: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
        padding: 0 1.25rem;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .container-master {
        max-width:1120px;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
`
