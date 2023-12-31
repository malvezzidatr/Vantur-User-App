import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: '#3A3A50';
      white: '#fff';
      blue: '#B6E7F2';
      warn: '#F2CD5C';
      success: '#54D99F';
      error: '#D96262';
    };
  }
}

export {};
