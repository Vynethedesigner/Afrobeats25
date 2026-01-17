import { useState } from 'react';
import type { Album } from '../types';
import './AlbumCard.css';

interface AlbumCardProps {
    album: Album;
    onClick: () => void;
    onAddToTop5: () => void;
    isInTop5: boolean;
}

export function AlbumCard({ album, onClick, onAddToTop5, isInTop5 }: AlbumCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToTop5 = (e: React.MouseEvent) => {
        e.stopPropagation();
        onAddToTop5();
    };

    return (
        <article
            className={`album-card ${isHovered ? 'hovered' : ''}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="album-card-image-container">
                <img
                    src={album.artwork}
                    alt={`${album.title} by ${album.artist}`}
                    className="album-card-image"
                    loading="lazy"
                />

                <div className="album-card-overlay">
                    <button
                        className={`add-to-top5-btn ${isInTop5 ? 'added' : ''}`}
                        onClick={handleAddToTop5}
                        aria-label={isInTop5 ? 'Added to Top 5' : 'Add to Top 5'}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                            <path d="M7 1.75V12.25M1.75 7H12.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {isInTop5 && (
                        <div className="album-card-badge">
                            In Top 5
                        </div>
                    )}
                </div>
            </div>

            <div className="album-card-info">
                <h3 className="album-card-title">{album.title}</h3>
                <p className="album-card-artist">{album.artist}</p>
            </div>
        </article>
    );
}
