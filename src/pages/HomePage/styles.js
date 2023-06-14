import styled, { createGlobalStyle } from "styled-components"
import { theme } from "../../global/theme"


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        font-family: 'Poppins', sans-serif;

    }
`

export const Container = styled.div`
    background-color: ${theme.colors.primary};
    width: 100%;
    min-height: 100vh;
    
    .not-found {
        padding-top: 48px;
        color: white;
        text-align: center;
        font-size: 24px;
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 96px;
    place-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 48px;
`