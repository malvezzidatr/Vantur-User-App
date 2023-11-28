import styled from "styled-components/native";
import { BlurView } from "expo-blur";

export const Container = styled.View`
    width: 260px;
    height: 340px;
    position: relative;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;
`

export const DateContainer = styled.View`
    position: absolute;
    left: -1px;
    top: 0;
    height: 50px;
    width: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    font-style: italic;
`

export const OwnerContainer = styled.View``

export const OwnerTitle = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
`

export const Owner = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
`

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 0 4px 30px;
    margin-top: 10px;
`

export const FavoriteButton = styled(BlurView).attrs({
    intensity: 60
})`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
`

export const GoToDetailsButton = styled.TouchableOpacity`
    width: 100px;
    height: 70px;
    background-color: green;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`