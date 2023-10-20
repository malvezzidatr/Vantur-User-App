import styled from 'styled-components/native'

export const Container = styled.View``

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    font-weight: 400;
`

export const Input = styled.TextInput`
    width: 80%;
    height: 56px;
    padding-left: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
`