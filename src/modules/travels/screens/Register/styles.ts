import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.blue};
    padding-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 45px;
`

export const LinkContainer = styled.View`
    flex-direction: row;
    margin-top: 4px;
`

export const Link = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 12px;
`

export const LinkPressable = styled.TouchableOpacity``

export const LinkBold = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 12px;
    font-weight: 700;
    text-decoration: underline;
`