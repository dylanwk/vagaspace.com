"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";

export type destinationValue = {
  label: string;
  quantity: number;
  latlng: number[];
};

export const ALL_VAGUE_CITIES: destinationValue[] = [
  { label: "Lisbon, Portugal", quantity: 6, latlng: [38.7223, -9.1393] },
  { label: "Mexico City, Mexico", quantity: 2, latlng: [19.4326, -99.1332] },
  {
    label: "Buenos Aires, Argentina",
    quantity: 1,
    latlng: [-34.6037, -58.3816],
  },
  {
    label: "Cape Town, South Africa",
    quantity: 3,
    latlng: [-33.9249, 18.4241],
  },
  { label: "Tokyo, Japan", quantity: 10, latlng: [35.6762, 139.6503] },
  { label: "Athens, Greece", quantity: 17, latlng: [37.9838, 23.7275] },
  { label: "Barcelona, Spain", quantity: 3, latlng: [41.3851, 2.1734] },
  { label: "Chiang Mai, Thailand", quantity: 4, latlng: [18.7061, 98.9817] },
];

interface ComboBoxProps {
  value?: destinationValue | null; // Allow null for the initial state
  onChange: (value: destinationValue | null) => void; // Allow null to reset
}

const ComboBox: React.FC<ComboBoxProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  return (
    <Autocomplete
      sx={{
        width: "100%", 
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",
        },
        "& .MuiAutocomplete-popupIndicator": {
          color: "black",
        },
      }}
      autoComplete
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={ALL_VAGUE_CITIES}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Anywhere"
          sx={{
            "& fieldset": { borderRadius: "50px", borderColor: "gray" },
            input: { color: "black" },
            "& label": { color: "black", paddingLeft: "4px" },
          }}
        />
      )}
      PopperComponent={({ style, ...props }) => (
        <Popper
          {...props}
          style={{
            ...style,
            width: "auto", // This allows the Popper to size based on its content
          }}
          placement="bottom-start"
          modifiers={[
            {
              name: "sameWidth",
              enabled: true,
              fn: ({ state }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`;
              },
              phase: "beforeWrite",
              requires: ["computeStyles"],
            },
          ]}
        />
      )}
      ListboxProps={{
        sx: {
          "& .MuiAutocomplete-option": {
            padding: "10px 12px",
            minHeight: "55px",
            boxSizing: "border-box",
          },
        },
      }}
    />
  );
};

export default ComboBox;
