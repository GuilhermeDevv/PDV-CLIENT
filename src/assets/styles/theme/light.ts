'use client';

interface ITheme {
  background: string;
  primary: string;
  secundary: string;
  icon: string;
  iconActive: string;
  BackgroundIconActive: string;
  BackgroundIconInative: string;
  backgroundActive: string;
  backgroundInative: string;
  backgroundSecundary: string;
  shadow: string;
  iconSecundary: string;
  iconInative: string;
  text: string;
  textSecundary: string;
  waveColor: string;
  primaryBackground: string;
  secondaryBackground: string;
  tertiaryBackground: string;
  quaternaryBackground: string;
  quinaryBackground: string;
  senaryBackground: string;
}
// #8541df,#6618c4,#c7a6e8,#fff,#a3a3a5
const LightTheme: ITheme = {
  background: '#fff',
  backgroundSecundary: '#f9f9f9',

  backgroundActive: '#f6eeff',
  backgroundInative: '#f9f9f9',

  primary: '#fff',
  secundary: '#fff',

  icon: '#a3a3a5',
  iconSecundary: '#000',

  shadow: '#cccccc6e',

  iconActive: '#6618c4',
  iconInative: '#a3a3a5',

  waveColor: '#c7a6e8',

  BackgroundIconActive: '#fff',
  BackgroundIconInative: '#000000de',

  text: '#323232',
  textSecundary: '#000',

  // cores especiais

  primaryBackground: '#6618c4',
  secondaryBackground: '#5dcfff',
  tertiaryBackground: '#e228af',
  quaternaryBackground: '#ff9e00',
  quinaryBackground: '#00d25b',
  senaryBackground: '#ff5e5e',
};

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export default LightTheme;
