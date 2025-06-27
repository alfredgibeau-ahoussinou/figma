"use client";
import * as React from "react";
import { useState } from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { MoodSelector } from "./MoodSelector";
import { PlaylistGrid } from "./PlaylistGrid";
import { RecommendationsList } from "./RecommendationsList";
import { RecentSearches } from "./RecentSearches";
import { MusicPlayer } from "./MusicPlayer";
import { Track, Playlist } from "./types";

export function MusicApp() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState("focus");
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState("figma");
  const [exportQuality, setExportQuality] = useState("high");
  const [isExporting, setIsExporting] = useState(false);

  const [recentSearches] = useState([
    "lo-fi hip hop",
    "study music",
    "ambient",
  ]);

  const [focusPlaylists] = useState<Playlist[]>([
    {
      id: 1,
      name: "Deep Focus",
      tracks: 127,
      image:
        "https://images.pexels.com/photos/32724868/pexels-photo-32724868.jpeg",
    },
    {
      id: 2,
      name: "Study Beats",
      tracks: 89,
      image:
        "https://images.pexels.com/photos/32741885/pexels-photo-32741885.jpeg",
    },
    {
      id: 3,
      name: "Ambient Study",
      tracks: 156,
      image:
        "https://images.pexels.com/photos/32747527/pexels-photo-32747527.jpeg",
    },
  ]);

  const [recommendations] = useState<Track[]>([
    {
      id: 1,
      title: "Weightless",
      artist: "Marconi Union",
      duration: "8:10",
      image:
        "https://images.pexels.com/photos/32694630/pexels-photo-32694630.jpeg",
    },
    {
      id: 2,
      title: "Clair de Lune",
      artist: "Claude Debussy",
      duration: "4:32",
      image:
        "https://images.pexels.com/photos/15007790/pexels-photo-15007790.jpeg",
    },
    {
      id: 3,
      title: "Aqueous Transmission",
      artist: "Incubus",
      duration: "7:49",
      image:
        "https://images.pexels.com/photos/32741377/pexels-photo-32741377.jpeg",
    },
  ]);

  function playTrack(track: Track) {
    setCurrentTrack(track);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function handleMoodChange(mood: string) {
    setSelectedMood(mood);
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query);
  }

  function handlePlaylistClick() {
    setShowPlaylist(true);
  }

  function handleSearchClick(search: string) {
    setSearchQuery(search);
  }

  return (
    <div className="min-h-screen text-white">
      <Header
        selectedMood={selectedMood}
        searchQuery={searchQuery}
        onMoodChange={handleMoodChange}
        onSearchChange={handleSearchChange}
      />
      <main className="p-10 mx-auto my-0 max-w-[1400px] max-sm:p-5">
        <HeroSection />
        <MoodSelector
          selectedMood={selectedMood}
          onMoodChange={handleMoodChange}
        />
        <PlaylistGrid
          playlists={focusPlaylists}
          onPlaylistClick={handlePlaylistClick}
        />
        <RecommendationsList
          recommendations={recommendations}
          onTrackPlay={playTrack}
        />
        <RecentSearches
          searches={recentSearches}
          onSearchClick={handleSearchClick}
        />
      </main>
      {currentTrack && (
        <MusicPlayer
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={togglePlay}
        />
      )}
    </div>
  );
}

export default MusicApp;
