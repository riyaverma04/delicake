import { RiSearch2Line } from "@remixicon/react";
import React, { useState, useEffect } from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Mango",
  "Orange",
  "Strawberry",
  "Watermelon",
  "Pineapple",
  "Peach",
];

function Search() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Debounce search to improve performance
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim() !== "") {
        const filtered = items.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
      } else {
        setFilteredItems([]);
      }
    }, 300); // Delay search for 300ms

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Handle keyboard navigation (Arrow keys & Enter)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      setQuery(filteredItems[selectedIndex]);
      setFilteredItems([]);
    }
  };

  return (
    <div className="relative w-full m-auto ">
      {/* Search Input */}
      <div className="flex items-center text-sm bg-white shadow-md rounded-xl  ">
        <input
          type="text"
          placeholder="Search for cakes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-2 py-2 outline-none bg-transparent text-gray-800"
        />
        
     
        {query && (
          <button
            onClick={() => setQuery("")}
            className="text-gray-500 text-xs relative right-2 hover:text-gray-700 transition"
          >
            ✖
          </button>
        )}
      </div>

      {/* Search Results */}
      {filteredItems.length > 0 && (
        <ul className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-md overflow-hidden z-10">
          {filteredItems.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setQuery(item);
                setFilteredItems([]);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                index === selectedIndex ? "bg-gray-200" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
