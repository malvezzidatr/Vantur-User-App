import styled from "styled-components/native";

export const ToastContainer = styled.View`
    width: 90%;
    height: 90px;
    justify-content: center;
    padding-left: 12px;
    border-radius: 12px;
    margin: 80px 20px;
    background-color: ${({ theme }) => theme.colors.white };
    z-index: 99;
    position: absolute;
`

export const ContentContainer = styled.View<{status: 'success' | 'warn' | 'error'}>`
    border-left-width: 8px;
    border-radius: 10px;
    padding: 10px 0 10px 20px;
    border-left-color: ${(props) => {
        const { status, theme } = props;

        const statusColorMap = {
          error: theme.colors.error,
          success: theme.colors.success,
          warn: theme.colors.warn,
        };
    
        const backgroundColor = statusColorMap[status];
    
        return backgroundColor;
    }};
`

export const Title = styled.Text<{status: 'success' | 'warn' | 'error'}>`
    color: ${(props) => {
        const { status, theme } = props;

        const statusColorMap = {
          error: theme.colors.error,
          success: theme.colors.success,
          warn: theme.colors.warn,
        };
    
        const backgroundColor = statusColorMap[status];
    
        return backgroundColor;
    }};
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: bold;
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
`