'use client';

import { forwardRef, memo } from 'react';
import { Container } from './styles';
import Select, { Props, StylesConfig } from 'react-select';
import { GroupBase } from 'react-select';
import { useTheme } from 'styled-components';
import { IconCaretDown } from '@/assets/icons';

interface IInputProps extends Props {}

// eslint-disable-next-line react/display-name
export const SelectComponent = forwardRef<Select, IInputProps>(
  ({ styles, ...rest }, ref) => {
    const theme = useTheme();
    const defaultStyles: StylesConfig = {
      control: provided => ({
        ...provided,
        width: '100%',

        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: theme.text,
        border: 'none',
        borderRadius: '10px',
        fontSize: '14px',
        boxShadow: 'none',
        '&:hover': {
          borderColor: 'transparent',
          cursor: 'pointer',
        },
        '& input': {
          color: '#a0a0a0 !important',
        },
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected
          ? theme.iconActive
          : state.isFocused
          ? theme.primary
          : theme.text,
        backgroundColor: state.isSelected
          ? theme.background
          : state.isFocused
          ? theme.background
          : provided.backgroundColor,
        '&:hover': {
          color: theme.primary,
          cursor: 'pointer',
          backgroundColor: theme.iconActive,
        },
      }),
      menu: provided => ({
        ...provided,
        backgroundColor: theme.background,
        borderColor: 'transparent',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        '& > div::-webkit-scrollbar': {
          width: '12px',
          backgroundColor: 'transparent',
        },
        '& > div::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: 'transparent',
        },
        '& > div::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&:hover': {
          backgroundColor: theme.background,
        },
      }),
      placeholder: provided => ({
        ...provided,
        color: theme.text,
        fontWeight: 'bold',
      }),
      indicatorSeparator: provided => ({
        ...provided,
        backgroundColor: 'transparent',
      }),
      singleValue: provided => ({
        ...provided,
        color: theme.text,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
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
    return (
      <Container>
        <Select
          ref={ref as unknown as any}
          styles={styles ?? defaultStyles}
          noOptionsMessage={() => 'Nenhum resultado encontrado'}
          placeholder="Selecione..."
          className="react-select-container"
          isSearchable={false}
          components={{
            DropdownIndicator: () => (
              <IconCaretDown
                fill={theme.iconActive}
                color={theme.iconActive}
                style={{
                  height: '16px',
                  marginRight: '10px',
                }}
              />
            ),
          }}
          {...rest}
        />
      </Container>
    );
  }
);

export default memo(SelectComponent);
