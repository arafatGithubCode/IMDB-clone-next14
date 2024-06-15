"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center px-5 max-w-6xl mx-auto"
    >
      <input
        className="w-full h-14 rounded-md placeholder-gray-500 bg-transparent outline-none flex-1"
        type="text"
        placeholder="Search Keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className={`text-amber-600 disabled:text-gray-400 font-semibold ${
          search && "animate-pulse"
        }`}
        disabled={search.trim() === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
