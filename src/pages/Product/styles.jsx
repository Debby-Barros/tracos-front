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

export const Title = styled.h1`
    color: ${theme.fontColor.colorTitle};
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    font-weight: 700; 
`

export const Description = styled.h1`
    color: ${theme.fontColor.colorTitle};
    font-size: 20px;
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: 600; 
    margin-left: 50px;
`

export const Text = styled.text`
    color: white;
    margin-left: 50px;
    margin-bottom: 50px;
`