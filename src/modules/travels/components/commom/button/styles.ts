import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
`