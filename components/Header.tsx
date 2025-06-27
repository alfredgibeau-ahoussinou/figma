"use client";
import * as React from "react";

interface HeaderProps {
  selectedMood: string;
  searchQuery: string;
  onMoodChange: (mood: string) => void;
  onSearchChange: (query: string) => void;
}

export function Header({
  selectedMood,
  searchQuery,
  onMoodChange,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 px-10 py-5 border-b border-solid backdrop-blur-[10px] border-b-white border-b-opacity-10 z-[100]">
      <div className="flex justify-between items-center mx-auto my-0 max-w-[1400px]">
        <div className="flex gap-10 items-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="flex gap-8 max-sm:hidden"
          >
            <button
              className="px-3 py-2 font-semibold text-white no-underline rounded transition-opacity cursor-pointer border-[none] duration-[0.2s]"
              role="button"
              aria-pressed={selectedMood === "focus"}
              onClick={() => onMoodChange("focus")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onMoodChange("focus");
                }
              }}
              style={{
                opacity: selectedMood === "focus" ? 1 : 0.7,
              }}
            >
              Focus Music
            </button>
            <button
              className="px-3 py-2 font-semibold text-white no-underline rounded transition-opacity cursor-pointer border-[none] duration-[0.2s]"
              role="button"
              aria-pressed={selectedMood === "discover"}
              onClick={() => onMoodChange("discover")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onMoodChange("discover");
                }
              }}
              style={{
                opacity: selectedMood === "discover" ? 1 : 0.7,
              }}
            >
              Discover
            </button>
            <button
              className="px-3 py-2 font-semibold text-white no-underline rounded transition-opacity cursor-pointer border-[none] duration-[0.2s]"
              role="button"
              aria-pressed={selectedMood === "playlists"}
              onClick={() => onMoodChange("playlists")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onMoodChange("playlists");
                }
              }}
              style={{
                opacity: selectedMood === "playlists" ? 1 : 0.7,
              }}
            >
              My Playlists
            </button>
          </nav>
        </div>
        <div className="relative flex-1 mx-5 my-0 max-w-[400px]">
          <label
            htmlFor="search-input"
            className="overflow-hidden absolute w-px h-px left-[-9999px]"
          >
            Search for music
          </label>
          <input
            className="py-3 pr-5 pl-12 w-full text-sm text-white rounded-3xl backdrop-blur-[10px] bg-white bg-opacity-10 border-[none]"
            id="search-input"
            type="text"
            placeholder="Search for focus music, artists, or genres..."
            aria-label="Search for focus music, artists, or genres"
            role="searchbox"
            value={searchQuery}
            onInput={(event) =>
              onSearchChange((event.target as HTMLInputElement).value)
            }
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute top-2/4 opacity-60 -translate-y-2/4 left-[18px]"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="p-2 text-white rounded-full cursor-pointer border-[none] duration-[0.2s] transition-[background]"
            aria-label="Notifications"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </button>
          <div className="w-8 h-8 text-sm rounded-full font-[bold]">A</div>
        </div>
      </div>
    </header>
  );
}
