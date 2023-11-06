import styled from 'styled-components/native'
import { Link as NativeLink, LinkProps } from 'react-router-native';

export const LinkContainer = styled.View`
    flex-direction: row;
    margin-top: 4px;
`

export const LinkText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 12px;
`

export const Link = styled(NativeLink).attrs<LinkProps>(props => ({
    underlayColor: props.theme.colors.primary
}))``

export const LinkBold = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 12px;
    font-weight: 700;
    text-decoration: underline;
`