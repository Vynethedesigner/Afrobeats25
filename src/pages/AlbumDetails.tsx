import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { albums } from '../data/albums';
import { Top5Panel } from '../components/Top5Panel';
import type { Album } from '../types';
import '../components/AlbumModal.css'; // Reusing styles for now

interface AlbumDetailsProps {
    onAddToTop5: (album: Album) => void;
    isInTop5: (id: string) => boolean;
    top5: Album[];
    onRemoveFromTop5: (id: string) => void;
    onClearTop5: () => void;
    onReorderTop5: (albums: Album[]) => void;
}

export function AlbumDetails({ onAddToTop5, isInTop5, top5, onRemoveFromTop5, onClearTop5, onReorderTop5 }: AlbumDetailsProps) {
    const { id } = useParams<{ id: string }>();
    const [palette, setPalette] = useState<string[]>([]);

    const album = albums.find(a => a.id === id);

    if (!album) {
        return <Navigate to="/" replace />;
    }

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Extract color palette
    useEffect(() => {
        const extractColors = async () => {
            try {
                const ColorThief = (await import('colorthief')).default;
                const colorThief = new ColorThief();
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.src = album.artwork;

                img.onload = () => {
                    const colors = colorThief.getPalette(img, 6);
                    setPalette(colors.map((c: number[]) => `rgb(${c[0]}, ${c[1]}, ${c[2]})`));
                };
            } catch (error) {
                console.error('Error extracting colors:', error);
            }
        };
        extractColors();
    }, [album.artwork]);

    const formatDuration = (duration: string) => duration;

    // We reuse 'album-modal' classes for styling, but layout is full page now
    return (
        <div className="album-details-page" style={{ height: '100vh', width: '100vw', background: 'var(--color-bg)' }}>
            {/* Styling reuse wrapper */}
            <div className="album-modal" style={{ borderRadius: 0, boxShadow: 'none', animation: 'none' }}>
                <div className="modal-content">
                    {/* Left Column - Artwork & Palette */}
                    <div className="modal-artwork-section">
                        {/* Editorial Disc Structure */}
                        <div className="editorial-disc-container">
                            {/* Rotating Text Ring */}
                            <div className="text-ring-spinner">
                                <svg viewBox="0 0 1000 1000" className="text-ring-svg">
                                    <path id="circlePath" d="M 500, 500 m -420, 0 a 420,420 0 1,1 840,0 a 420,420 0 1,1 -840,0" fill="none" />
                                    <text className="ring-text">
                                        <textPath href="#circlePath" startOffset="0%">
                                            {`${album.title} • ${album.artist} • ${album.title} • ${album.artist} • `}
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Album Art Disc */}
                            <div className="disc-art">
                                <img
                                    src={album.artwork}
                                    alt={`${album.title} by ${album.artist}`}
                                    className="disc-artwork-img"
                                />
                                <div className="spindle-dot" />
                            </div>
                        </div>

                        {/* Color Palette */}
                        {palette.length > 0 && (
                            <div className="modal-palette">
                                <h4 className="palette-title">Color Palette</h4>
                                <div className="palette-colors">
                                    {palette.map((color, i) => (
                                        <button
                                            key={i}
                                            className="palette-color-btn"
                                            style={{ backgroundColor: color }}
                                            onClick={() => navigator.clipboard.writeText(color)}
                                            title={`Click to copy: ${color}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="modal-actions">
                            <a
                                href={album.spotifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="spotify-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                                Listen on Spotify
                            </a>

                            <button
                                className={`add-top5-modal-btn ${isInTop5(album.id) ? 'added' : ''}`}
                                onClick={() => onAddToTop5(album)}
                                disabled={isInTop5(album.id)}
                            >
                                {isInTop5(album.id) ? '✓ In Your Top 5' : '+ Add to Top 5'}
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="modal-details-section">
                        <header className="modal-header">
                            <h2 className="modal-title">{album.title}</h2>
                            <p className="modal-artist">{album.artist}</p>
                            <p className="modal-date">{new Date(album.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </header>

                        {/* Tracklist */}
                        <section className="modal-tracklist">
                            <h3 className="section-title">Tracklist</h3>
                            <ol className="track-list">
                                {album.tracks.map((track) => (
                                    <li key={track.number} className="track-item">
                                        <span className="track-number">{track.number}</span>
                                        <div className="track-info">
                                            <span className="track-title">{track.title}</span>
                                            {track.featured && track.featured.length > 0 && (
                                                <span className="track-featured">
                                                    feat. {track.featured.join(', ')}
                                                </span>
                                            )}
                                        </div>
                                        <span className="track-duration">{formatDuration(track.duration)}</span>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* Reactions */}
                        {album.reactions.length > 0 && (
                            <section className="modal-reactions">
                                <h3 className="section-title">The Internet Says</h3>
                                <div className="reactions-list">
                                    {album.reactions.map((reaction, index) => (
                                        <div key={index} className={`reaction-card ${reaction.type}`}>
                                            <p className="reaction-content">"{reaction.content}"</p>
                                            <div className="reaction-source">
                                                {(reaction.type === 'tweet' || reaction.type === 'quote') && (
                                                    <>
                                                        <span className="reaction-author">{reaction.author}</span>
                                                        {reaction.handle && <span className="reaction-handle">{reaction.handle}</span>}
                                                    </>
                                                )}
                                                {(reaction.type === 'quote' || reaction.type === 'headline') && (
                                                    <span className="reaction-publication">— {reaction.source}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>

            <Top5Panel
                albums={top5}
                onRemove={onRemoveFromTop5}
                onClear={onClearTop5}
                onReorder={onReorderTop5}
            />
        </div>
    );
}
