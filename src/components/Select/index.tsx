'use client';

import { forwardRef } from 'react';
import { Container } from './styles';
import Select, { Props, StylesConfig } from 'react-select';
import { GroupBase } from 'react-select';

const defaultStyles: StylesConfig = {
  control: provided => ({
    ...provided,
    width: '100%',
    backgroundColor: '#000',
    borderColor: 'white',
    color: '#a0a0a0',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'transparent',
    },
    '& input': {
      color: '#a0a0a0 !important',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : state.isFocused ? '#f00' : '#a0a0a0',
    backgroundColor: state.isSelected
      ? '#202020'
      : state.isFocused
      ? '#fff'
      : provided.backgroundColor,

    '&:hover': {
      color: '#f00',
      cursor: 'pointer',
      backgroundColor: '#fff',
    },
  }),
  menu: provided => ({
    ...provided,
    position: 'fixed',
    backgroundColor: '#000',
    top: '',
    width: '',
    borderColor: 'white',
    '& > div::-webkit-scrollbar': {
      width: '12px',
      backgroundColor: '#000',
    },
    '& > div::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
    },
    '& > div::-webkit-scrollbar-track': {
      backgroundColor: '#000',
    },
    // tirar o hover azul do menu
    '&:hover': {
      backgroundColor: '#000',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#ccc',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#a0a0a0',
    backgroundColor: '#000',
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: 'gray',
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: provided => ({
    ...provided,
    color: 'white',
    ':hover': {
      backgroundColor: 'gray',
      color: 'black',
    },
  }),
};

interface IInputProps extends Props {}

// eslint-disable-next-line react/display-name
export const SelectComponent = forwardRef<Select, IInputProps>(
  ({ styles, ...rest }, ref) => {
    return (
      <Container>
        <Select
          ref={ref as unknown as any}
          styles={styles ?? defaultStyles}
          noOptionsMessage={() => 'Nenhum resultado encontrado'}
          placeholder="Selecione..."
          className="react-select-container"
          {...rest}
        />
      </Container>
    );
  }
);

export default SelectComponent;
