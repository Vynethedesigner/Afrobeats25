export interface Track {
  number: number;
  title: string;
  duration: string;
  featured?: string[];
}

export interface Reaction {
  type: 'tweet' | 'quote' | 'headline';
  content: string;
  author?: string;
  handle?: string;
  source?: string;
  date?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  releaseDate: string;
  genre: string;
  spotifyUrl: string;
  tracks: Track[];
  reactions: Reaction[];
}

export interface Top5Selection {
  albums: Album[];
  createdAt: Date;
}
