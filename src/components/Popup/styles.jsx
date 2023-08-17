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
    margin-top: 20px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`

export const Text = styled.text`
    padding-top: 20px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`

export const Text1 = styled.text`
    padding: 0;
    align-items: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`

export const FecharPopup = styled.div`
    display: flex;
    justify-content: right;
    position: absolute;
    top: 30px;
    right: 50px;
    font-size: 20px;
`

export const ButtonDiv = styled.button`
    background-color: ${theme.colors.blue};
    width: 85px;
    height: 30px;
    border-radius: 100px;
    border-color: ${theme.colors.blue};
    color: ${theme.fontColor.colorTitle};
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    display: flex;
    position: absolute;
    top: 165px;
    right: 0;
    bottom: 0;
    left: 260px;

`

export const ButtonPopup = styled.button`
    background-color: ${theme.colors.blue};
    width: 85px;
    height: 30px;
    border-radius: 100px;
    border-color: ${theme.colors.blue};
    color: ${theme.fontColor.colorTitle};
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    align-items: center;
`

export const ButtonPopup1 = styled.button`
    background-color: ${theme.colors.blue};
    width: 140px;
    height: 30px;
    border-radius: 100px;
    border-color: ${theme.colors.blue};
    color: ${theme.fontColor.colorTitle};
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    align-items: center;
    margin: 1px;
`