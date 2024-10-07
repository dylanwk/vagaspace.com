interface PropertyMapProps {
  toggleProperty: (property: string) => void;
  selectedProperties: Set<string>;
}

const PropertyMap: React.FC<PropertyMapProps> = ({
  toggleProperty,
  selectedProperties,
}) => {
  return (
    <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between">
      <div className="flex flex-col">
        <div className="font-medium"> Property Type </div>
        <div className="font-light text-gray-400">
          What type of space do you need?
        </div>
      </div>
      <div className="flex flex-row sm:gap-4 gap-8 justify-center sm:justify-end mt-4 sm:mt-4">
        <div
          onClick={() => toggleProperty("Apartment")}
          className={`flex text-sm cursor-pointer px-3 py-2 items-center justify-center hover:text-black rounded-full border-1  
            ${
              selectedProperties.has("Apartment")
                ? "border border-black text-black"
                : "text-neutral-500"
            }`}
        >
          Apartment
        </div>
        <div
          onClick={() => toggleProperty("Entire Home")}
          className={`flex text-sm cursor-pointer px-3 py-2 items-center justify-center hover:text-black rounded-full border-1  
            ${
              selectedProperties.has("Entire Home")
                ? "border border-black text-black"
                : "text-neutral-500"
            }`}
        >
          Entire Home
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
