import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 40px 30px 0;
`

export const HelloGuy = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 28px;
    font-weight: 700;
`