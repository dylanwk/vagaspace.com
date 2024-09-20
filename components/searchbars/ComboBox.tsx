"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export type destinationValue = {
  label: string;
  quantity: number;
  latlng: number[];
};

export const ALL_VAGUE_CITIES: destinationValue[] = [
  { label: "Lisbon, Portugal", quantity: 6, latlng: [38.7223, -9.1393] },
  { label: "Del Carmen, Mexico", quantity: 9, latlng: [20.6296, -87.0739] },
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

const ComboBox: React.FC<ComboBoxProps> = ({
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  return (
      <Autocomplete
        
        className="w-full border-hidden rounded-md"
        value={value}
        onChange={(event, newValue) => {
          onChange(newValue); // Assign new destinationValue
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue); // Track input value changes
        }}
        id="controllable-states-demo"
        options={ALL_VAGUE_CITIES}
        getOptionLabel={(option) => option.label} // Define label for the dropdown
        sx={{ width: 300, border: "hidden", borderRadius: "md" , borderColor: "red.800"}}
        renderInput={(params) => <TextField {...params} label="Anywhere" />}
      />
  );
};

export default ComboBox;
