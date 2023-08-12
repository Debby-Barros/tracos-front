import styled, { createGlobalStyle } from "styled-components"
import { theme } from "../../global/theme"


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poppins', sans-serif;

    }
`

export const Container = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    width: 100vw;
`

export const FormContainer = styled.div`
`

export const Form = styled.form`
    
`

export const Title = styled.p`
  color: ${theme.fontColor.colorTitle};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  font-weight: 700;
`

export const SubTitle = styled.p`
  color: ${theme.fontColor.colorTitle};
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-weight: 700;
`

export const InputTitle = styled.p`
    font-weight: 400;
    color: ${theme.fontColor.colorTitle};
    padding: 5px;
`

export const Input = styled.p`
    width: 330px;
    height: 30px;
    background-color: ${theme.colors.primary};
    border: 1.75px solid;
    border-radius: 5px;
    margin-bottom: 20px;
    &::placeholder{ 
        color: ${theme.colors.white};
    }
    color: ${theme.colors.white};
    padding-left: 10px;
    font-size: 12px;
`

export const Button = styled.button`
    background-color: ${theme.colors.blue};
    width: 100px;
    height: 35px;
    border-radius: 5px;
    border-color: ${theme.colors.blue};
    color: ${theme.fontColor.colorTitle};
    font-family: 'Poppins', sans-serif;
    margin-bottom: 40px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img= styled.div`
   align-self: center;
   display: flex;
   justify-content: center;
   text-align: center;
`

export const Image = styled.img`
`
