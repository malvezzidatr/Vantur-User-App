import React from "react";
import * as S from './styles';

interface TextLinkProps {
    firstText: string;
    linkText: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
    firstText,
    linkText
}): JSX.Element => {
    return (
        <S.LinkContainer>
            <S.Link>{firstText}</S.Link>
            <S.LinkPressable>
                <S.LinkBold>{linkText}</S.LinkBold>
            </S.LinkPressable>
        </S.LinkContainer>
    )
}