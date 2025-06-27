"use client";
import * as React from "react";

interface RecentSearchesProps {
  searches: string[];
  onSearchClick: (search: string) => void;
}

export function RecentSearches({
  searches,
  onSearchClick,
}: RecentSearchesProps) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">Recent Searches</h2>
      <div className="flex flex-wrap gap-4">
        {searches.map((search, index) => (
          <button
            className="px-5 py-2.5 text-white rounded-3xl transition-all cursor-pointer backdrop-blur-[10px] bg-white bg-opacity-10 border-[none] duration-[0.2s]"
            key={index}
            onClick={() => onSearchClick(search)}
          >
            {search}
          </button>
        ))}
      </div>
    </section>
  );
}
