"use client";

import { Container } from "./styles";
import Select, { Props, StylesConfig } from "react-select";

const defaultStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    width: "100%",
    height: "40px",
    backgroundColor: "white",
    borderColor: "white",
    color: "#ccc",
    boxShadow: "none",
    "&:hover": {
      borderColor: "trasparent",
    },
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: "white",
    color: "black",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
    borderColor: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#ccc",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
    backgroundColor: "white",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "gray",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "white",
    ":hover": {
      backgroundColor: "gray",
      color: "black",
    },
  }),
};

interface IInputProps extends Props {}

export function SelectComponent({ styles, ...rest }: IInputProps) {
  return (
    <Container>
      <Select
        styles={styles ?? defaultStyles}
        noOptionsMessage={() => "Nenhum resultado encontrado"}
        placeholder="Selecione..."
        className="react-select-container"
        {...rest}
      />
    </Container>
  );
}
