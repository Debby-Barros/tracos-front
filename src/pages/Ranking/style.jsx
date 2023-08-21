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
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    font-weight: 700; 
`

export const Table = styled.table`
    color: white;
    margin: auto;
`

export const Head = styled.thead`
    
`

export const Body = styled.tbody`
`

export const Thead = styled.th`
    color: white;
    background: ${theme.colors.blue};
    
`

export const Trow = styled.tr`
    &:nth-child(even) {
    background: ${theme.colors.blue};
  }
`

export const Tdata = styled.td`
    padding-left: 90px;
    padding-right: 80px;
    margin: auto;
`