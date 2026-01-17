import { useState, useMemo } from 'react';
import { albums } from '../data/albums';
import type { Album } from '../types';
import { AlbumCard } from './AlbumCard';
import './AlbumGrid.css';

interface AlbumGridProps {
    onAlbumClick: (album: Album) => void;
    onAddToTop5: (album: Album) => void;
    isInTop5: (albumId: string) => boolean;
}

export function AlbumGrid({ onAlbumClick, onAddToTop5, isInTop5 }: AlbumGridProps) {
    const [selectedGenre, setSelectedGenre] = useState<string>('ALL');

    const genres = useMemo(() => {
        const allGenres = albums.map(a => a.genre);
        return ['ALL', ...Array.from(new Set(allGenres))];
    }, []);

    const filteredAlbums = useMemo(() => {
        if (selectedGenre === 'ALL') return albums;
        return albums.filter(album => album.genre === selectedGenre);
    }, [selectedGenre]);

    return (
        <section className="album-grid-section">
            <div className="filter-container">
                {genres.map(genre => (
                    <button
                        key={genre}
                        className={`filter-button ${selectedGenre === genre ? 'active' : ''}`}
                        onClick={() => setSelectedGenre(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            <div className="album-grid">
                {filteredAlbums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        album={album}
                        onClick={() => onAlbumClick(album)}
                        onAddToTop5={() => onAddToTop5(album)}
                        isInTop5={isInTop5(album.id)}
                    />
                ))}
            </div>
        </section>
    );
}
