"use client";
import * as React from "react";
import { Track } from "./types";

interface MusicPlayerProps {
  currentTrack: Track;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function MusicPlayer({
  currentTrack,
  isPlaying,
  onTogglePlay,
}: MusicPlayerProps) {
  return (
    <div className="flex fixed inset-x-0 bottom-0 justify-between items-center px-10 py-4 border-t border-solid backdrop-blur-[20px] bg-black bg-opacity-90 border-t-white border-t-opacity-10 z-[1000]">
      <div className="flex flex-1 gap-4 items-center">
        <img
          className="object-cover overflow-hidden rounded-lg aspect-square h-[50px] w-[50px]"
          src={currentTrack.image}
          alt={currentTrack.title}
        />
        <div>
          <h4 className="mb-0.5 text-sm font-semibold">{currentTrack.title}</h4>
          <p className="text-xs opacity-70">{currentTrack.artist}</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <button className="p-2 text-white cursor-pointer border-[none]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>
        <button
          className="flex justify-center items-center w-10 h-10 bg-green-500 rounded-full transition-all cursor-pointer border-[none] duration-[0.2s]"
          onClick={onTogglePlay}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            {isPlaying ? (
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
        </button>
        <button className="p-2 text-white cursor-pointer border-[none]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 gap-4 justify-end items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-70"
        >
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
        <div className="relative h-1 rounded-sm bg-white bg-opacity-30 w-[100px]">
          <div className="w-3/5 h-full bg-green-500 rounded-sm" />
        </div>
      </div>
    </div>
  );
}
