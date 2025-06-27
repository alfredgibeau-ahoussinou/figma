"use client";
import * as React from "react";
import { Playlist } from "./types";

interface PlaylistGridProps {
  playlists: Playlist[];
  onPlaylistClick: () => void;
}

export function PlaylistGrid({
  playlists,
  onPlaylistClick,
}: PlaylistGridProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-bold">Curated for Focus</h2>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {playlists.map((playlist) => (
          <div
            className="p-6 rounded-3xl transition-all cursor-pointer backdrop-blur-[10px] bg-white bg-opacity-10 duration-[0.3s] ease-[ease]"
            role="button"
            key={playlist.id}
            tabIndex={0}
            aria-label={`Open ${playlist.name} playlist with ${playlist.tracks} tracks`}
            onClick={onPlaylistClick}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onPlaylistClick();
              }
            }}
          >
            <img
              className="object-cover overflow-hidden mb-5 w-full rounded-2xl aspect-square h-[200px]"
              src={playlist.image}
              alt={playlist.name}
            />
            <h3 className="mb-2 text-xl font-bold">{playlist.name}</h3>
            <p className="text-sm opacity-70">
              <span>{playlist.tracks}</span>
              <span> tracks</span>
            </p>
            <button
              className="px-6 py-3 mt-4 font-semibold text-white bg-green-500 rounded-3xl transition-all cursor-pointer border-[none] duration-[0.2s]"
              aria-label={`Play ${playlist.name} playlist`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onPlaylistClick();
                }
              }}
            >
              Play Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
