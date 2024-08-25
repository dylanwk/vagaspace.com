'use client';
import React from 'react';
import Select from 'react-select';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

export type destinationValue = {
  label: string;
  quantity: number;
  latlng: number[];
};

export const cityOptions: destinationValue[] = [
  { label: "Lisbon, Portugal", quantity: 6, latlng: [38.7223, -9.1393] },
  { label: "Del Carmen, Mexico", quantity: 9, latlng: [20.6296, -87.0739] },
  { label: "Mexico City, Mexico", quantity: 2, latlng: [19.4326, -99.1332] },
  { label: "Buenos Aires, Argentina", quantity: 1, latlng: [-34.6037, -58.3816] },
  { label: "Cape Town, South Africa", quantity: 3, latlng: [-33.9249, 18.4241] },
  { label: "Tokyo, Japan", quantity: 10, latlng: [35.6762, 139.6503] },
  { label: "Athens, Greece", quantity: 17, latlng: [37.9838, 23.7275] },
  { label: "Barcelona, Spain", quantity: 3, latlng: [41.3851, 2.1734] },
  { label: "Chiang Mai, Thailand", quantity: 4, latlng: [18.7061, 98.9817] },
];

interface CountrySelectProps {
  value?: destinationValue;
  onChange: (value: destinationValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  //const { getAll } = useCountries();
  //const options = getAll();
  const optiuons = cityOptions
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={optiuons}
        value={value}
        onChange={(value: any) => onChange(value as destinationValue)}
        formatOptionLabel={(optiuons: destinationValue) => (
          <div className="flex flex-row items-center gap-3">
            <div className="">{optiuons.quantity}</div>
            <div>
              {optiuons.label},
              <span className="ml-1 text-neutral-800"></span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
  );
};

export default CountrySelect;
