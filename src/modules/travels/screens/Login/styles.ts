import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.blue};
    padding: 60px 30px 60px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-family: Roboto;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
`