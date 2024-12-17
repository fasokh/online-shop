import React, { FC, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useDispatch } from "react-redux";
import FetchData from "@/store/actionCenter";
import { RootDispatch } from "@/store/app";

const SearchIcon: FC = () => {
  const dispatch = useDispatch<RootDispatch>();
  const [query, setQuery] = useState("");

  const searchHandler = () => {
    dispatch(FetchData({ query }));
  };

  return (
    <div className="relative w-full px-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="... Search"
        className="w-full lg:w-96 md:w-80 sm:w-64 rounded-lg px-7 py-2 focus:outline-none border border-gray-300"
      />
      <button onClick={searchHandler}>
        <MagnifyingGlassIcon className="absolute w-5 h-5 top-3 left-6" />
      </button>
    </div>
  );
};

export default SearchIcon;
