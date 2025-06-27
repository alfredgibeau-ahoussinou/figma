"use client";
import * as React from "react";
import { Track } from "./types";

interface RecommendationsListProps {
  recommendations: Track[];
  onTrackPlay: (track: Track) => void;
}

export function RecommendationsList({
  recommendations,
  onTrackPlay,
}: RecommendationsListProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-bold">Recommended for You</h2>
      <div className="p-8 rounded-3xl backdrop-blur-[10px] bg-white bg-opacity-10">
        {recommendations.map((track, index) => (
          <div
            className="flex items-center px-0 py-4 rounded-xl transition-all cursor-pointer duration-[0.2s]"
            role="button"
            key={track.id}
            tabIndex={0}
            aria-label={`Play ${track.title} by ${track.artist}, duration ${track.duration}`}
            onClick={() => onTrackPlay(track)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onTrackPlay(track);
              }
            }}
            style={{
              borderBottom:
                index < recommendations.length - 1
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "none",
            }}
          >
            <img
              className="object-cover overflow-hidden mr-4 rounded-lg aspect-square h-[50px] w-[50px]"
              src={track.image}
              alt={track.title}
            />
            <div className="flex-1">
              <h4 className="mb-1 text-base font-semibold">{track.title}</h4>
              <p className="text-sm opacity-70">{track.artist}</p>
            </div>
            <span className="mr-4 text-sm opacity-60">{track.duration}</span>
            <button
              className="p-2 text-green-500 rounded-full cursor-pointer border-[none] duration-[0.2s] transition-[background]"
              aria-label={`Play ${track.title}`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onTrackPlay(track);
                }
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
