"use client";

interface ITheme {
  background: string;
  primary: string;
  secundary: string;
  icon: string;
  iconActive: string;
  BackgroundIconActive: string;
  BackgroundInative: string;

  textSecundary: string;
  deleteColor: string;
  button: string;
  buttonHover: string;
  buttonActive: string;
  buttonDisabled: string;
}

const LightTheme: ITheme = {
  background: "#000",
  primary: "#262626",
  secundary: "#fff",
  icon: "#fff",
  iconActive: "#f00",
  BackgroundIconActive: "#2d2c2c",
  BackgroundInative: "#000000de",

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
