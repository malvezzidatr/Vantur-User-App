import styled from "styled-components/native";

export const Container = styled.View`
    height: 120px;
    border-radius: 10px;
    flex-direction: row;
    background-color: white;
`

export const ValueContainer = styled.View`
    flex: 1;
    border-style: dashed;
    border-right-width: 2px;
    border-color: #ddd;
    flex-direction: row;
`

export const InfoContainer = styled.View`
    flex: 2;
`

export const Color = styled.View`
    flex: 1;
    background-color: yellow;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const TextsContainer = styled.View`
    flex: 10;
`