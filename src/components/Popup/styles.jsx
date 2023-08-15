import styled from "styled-components"
import { theme } from "../../global/theme"

export const Button = styled.button`
    background-color: ${theme.colors.blue};
    width: 100px;
    height: 35px;
    border-radius: 100px;
    border-color: ${theme.colors.blue};
    color: ${theme.fontColor.colorTitle};
    font-family: 'Poppins', sans-serif;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`

export const Text = styled.text`
    padding-top: 20px;
    text-align: center;
`

export const FecharPopup = styled.div`
    display: flex;
    justify-content: end;
`