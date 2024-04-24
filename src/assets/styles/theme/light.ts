"use client";

interface ITheme {
  background: string;
  primary: string;
  secundary: string;
  textSecundary: string;
  deleteColor: string;
  button: string;
  buttonHover: string;
  buttonActive: string;
  buttonDisabled: string;
}

const LightTheme: ITheme = {
  background: "#f5f5f5",
  primary: "#5061fc",
  secundary: "#b3bbff",
  textSecundary: "#a0a0a0",
  deleteColor: "#ff4d4d",
  button: "#0070f3",
  buttonHover: "#0056b3",
  buttonActive: "#004499",
  buttonDisabled: "#b3b3b3",
};

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

export default LightTheme;
