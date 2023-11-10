export interface ITheme {
  colors: {
    blueprimary: string;
    black: string;
    gray20: string;
    gray10: string;
    gray00: string;
    white: string;
  };
  fonts: {
    h1: {
      family: string;
      size: number;
    };
    h2: {
      family: string;
      size: number;
    };
    h3: {
      family: string;
      size: number;
    };
  };
  spacing: {
    medium32: number;
    regular28: number;
    regular20: number;
    regular16: number;
    litle8: number;
  };
}
