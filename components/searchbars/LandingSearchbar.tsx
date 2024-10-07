"use client";

import React, { FormEvent, useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

import MapPinIcon from "@mui/icons-material/PlaceOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";


type Country = {
  label: string;
  quantity: number;
};

export const destinationOptions: Country[] = [
  { label: "Lisbon, Portugal", quantity: 6 },
  { label: "Mexico City, Mexico", quantity: 2 },
  { label: "Buenos Aires, Argentina", quantity: 1 },
  { label: "Cape Town, South Africa", quantity: 3 },
  { label: "Tokyo, Japan", quantity: 10 },
  { label: "Athens, Greece", quantity: 17 },
  { label: "Barcelona, Spain", quantity: 3 },
  { label: "Chiang Mai, Thailand", quantity: 4 },
];

interface LandingSearchbarProps {
  
}

export default function LandingSearchbar({
  
}: LandingSearchbarProps) {
  const [locationValue, setLocationValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredSuggestions = useMemo(() => {
    if (!locationValue) return destinationOptions;

    const filtered = destinationOptions.filter((suggestion) =>
      suggestion.label.toLowerCase().includes(locationValue.toLowerCase())
    );

    return filtered.length > 0
      ? filtered
      : [{ quantity: -1, label: "No matches found" }];
  }, [locationValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocationValue(value);
    if (value) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  };

  const handleSuggestionClick = (value: string) => {
    setLocationValue(value);
    setDropdownOpen(false);
  };

  const handleInputFocus = () => {
    setDropdownOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const matchedLocation = destinationOptions.find((loc) =>
      loc.label.toLowerCase().includes(locationValue.toLowerCase())
    );
    if (matchedLocation) {
      router.push(`/s?locationValue=${matchedLocation.label}`);
    } else {
      router.push("/s");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    
    <div
      ref={containerRef}
      className="relative z-20 flex cursor-pointer flex-row justify-center rounded-full border-[2px] bg-transparent py-3.5 align-middle backdrop-blur-md backdrop-filter sm:w-[550px]"
      role="search"
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-row items-center justify-between"
      >
        <div className="ml-6 hidden sm:block text-white" aria-hidden="true">
          <MapPinIcon fontSize="large" />
        </div>

        <div className="flex flex-1 items-center justify-center text-left font-bold">
          <span className="relative ml-4 w-full text-center text-white">
            <input
              id="LocationInput"
              aria-autocomplete="list"
              aria-controls="autocomplete-list"
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              autoComplete="off"
              name="locationValue"
              onFocus={handleInputFocus}
              type="text"
              placeholder=""
              className="border-1 peer w-full rounded-md bg-transparent p-2 pl-4 pt-6 text-xl font-semibold outline-none transition disabled:cursor-not-allowed disabled:opacity-70"
              value={locationValue}
              onChange={handleInputChange}
            />
            <label
              htmlFor="LocationInput"
              className="absolute left-4 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text justify-center text-lg font-semibold text-white duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
            >
              Search Destinations
            </label>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute left-0 z-50 mt-5 w-full max-w-[350px] rounded-lg shadow-md bg-white"
                role="region"
                aria-labelledby="LocationInput"
              >
                <ul
                  id="autocomplete-list"
                  role="listbox"
                  className="max-h-[250px] overflow-scroll rounded-sm bg-white font-semibold tracking-normal text-black"
                >
                  {filteredSuggestions.map((suggestion, index) =>
                    suggestion.quantity === -1 ? (
                      <li
                        className="flex h-[150px] cursor-default items-center justify-center p-1 px-2 text-sm text-gray-500"
                        key={index}
                        role="option"
                        aria-selected="false"
                      >
                        Unfortunately, we don&apos;t have any accommodations at
                        this location right now. <br></br> Feel free to search
                        other destinations!
                      </li>
                    ) : (
                      <li
                        className="flex h-[43px] cursor-pointer items-center justify-between rounded-sm pl-4 text-sm hover:bg-gray-100"
                        role="option"
                        aria-selected="false"
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion.label)}
                      >
                        <div>
                          {suggestion.label.split(",")[0]}, <span className="font-light text-gray-600">{suggestion.label.split(",")[1]}</span>
                        </div>
                      </li>
                    )
                  )}
                  <li
                    className="flex h-[50px] items-center justify-center text-sm hover:bg-gray-200"
                    role="option"
                    aria-selected="false"
                    onClick={() => handleSuggestionClick("Anywhere")}
                  >
                    Show all Destinations
                  </li>
                </ul>
              </motion.div>
            )}
          </span>
        </div>
        <Button
          className="ml-2 mr-3 flex items-center justify-center rounded-full bg-primary p-3 align-middle sm:-ml-6"
          style={{ minWidth: "60px", minHeight: "60px" }}
          type="submit"
          aria-label="Search"
        >
          <div className="hidden pl-4 pr-3 text-lg font-semibold text-white sm:block">
            Search
          </div>
          <span aria-hidden="true" className="text-white"><ArrowForwardIosOutlinedIcon /></span>
        </Button>
      </form>
    </div>
  );
}
