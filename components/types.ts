export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  image: string;
}

export interface Playlist {
  id: number;
  name: string;
  tracks: number;
  image: string;
}

export interface Mood {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface MusicAppState {
  currentTrack: Track | null;
  isPlaying: boolean;
  searchQuery: string;
  selectedMood: string;
  showPlaylist: boolean;
  showExportModal: boolean;
  exportFormat: string;
  exportQuality: string;
  isExporting: boolean;
  recentSearches: string[];
  focusPlaylists: Playlist[];
  recommendations: Track[];
}
