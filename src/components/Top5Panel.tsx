import { useState, useRef } from 'react';
import type { Album } from '../types';
import { toPng } from 'html-to-image';
import './Top5Panel.css';

interface Top5PanelProps {
    albums: Album[];
    onRemove: (albumId: string) => void;
    onClear: () => void;
    onReorder: (newOrder: Album[]) => void;
}

export function Top5Panel({ albums, onRemove, onClear, onReorder }: Top5PanelProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showShareCard, setShowShareCard] = useState(false);
    const shareCardRef = useRef<HTMLDivElement>(null);

    const emptySlots = 5 - albums.length;

    const handleGenerateImage = async () => {
        if (!shareCardRef.current || albums.length === 0) return;

        setIsGenerating(true);
        try {
            const dataUrl = await toPng(shareCardRef.current, {
                quality: 1,
                pixelRatio: 2,
                backgroundColor: '#000',
            });

            // Create download link
            const link = document.createElement('a');
            link.download = 'my-top-5-afrobeats-2025.png';
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleShare = async () => {
        if (navigator.share && albums.length > 0) {
            try {
                await navigator.share({
                    title: 'My Top 5 Afrobeats Albums of 2025',
                    text: `Check out my top 5 Afrobeats albums of 2025:\n${albums.map((a, i) => `${i + 1}. ${a.title} - ${a.artist}`).join('\n')}`,
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback: copy to clipboard
            const text = `My Top 5 Afrobeats Albums of 2025:\n${albums.map((a, i) => `${i + 1}. ${a.title} - ${a.artist}`).join('\n')}`;
            await navigator.clipboard.writeText(text);
            alert('Copied to clipboard!');
        }
    };

    // Drag and drop reordering
    const handleDragStart = (e: React.DragEvent, index: number) => {
        e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, dropIndex: number) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
        if (dragIndex === dropIndex) return;

        const newOrder = [...albums];
        const [draggedItem] = newOrder.splice(dragIndex, 1);
        newOrder.splice(dropIndex, 0, draggedItem);
        onReorder(newOrder);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                className={`top5-toggle ${albums.length > 0 ? 'has-albums' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Toggle Top 5 panel"
            >
                <span className="top5-toggle-icon">🏆</span>
                {albums.length > 0 && (
                    <span className="top5-count">{albums.length}</span>
                )}
            </button>

            {/* Panel */}
            <aside className={`top5-panel ${isExpanded ? 'expanded' : ''}`}>
                <header className="top5-header">
                    <h2 className="top5-title">Your Top 5</h2>
                    <button
                        className="top5-close"
                        onClick={() => setIsExpanded(false)}
                        aria-label="Close panel"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                        </svg>
                    </button>
                </header>

                <div className="top5-content">
                    {/* Album Slots */}
                    <div className="top5-slots">
                        {albums.map((album, index) => (
                            <div
                                key={album.id}
                                className="top5-slot filled"
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, index)}
                            >
                                <span className="slot-number">{index + 1}</span>
                                <img
                                    src={album.artwork}
                                    alt={album.title}
                                    className="slot-artwork"
                                />
                                <div className="slot-info">
                                    <span className="slot-title">{album.title}</span>
                                    <span className="slot-artist">{album.artist}</span>
                                </div>
                                <button
                                    className="slot-remove"
                                    onClick={() => onRemove(album.id)}
                                    aria-label={`Remove ${album.title}`}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
                                    </svg>
                                </button>
                            </div>
                        ))}

                        {/* Empty Slots */}
                        {Array.from({ length: emptySlots }).map((_, index) => (
                            <div key={`empty-${index}`} className="top5-slot empty">
                                <span className="slot-number">{albums.length + index + 1}</span>
                                <span className="slot-placeholder">Add an album</span>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    {albums.length > 0 && (
                        <div className="top5-actions">
                            <button
                                className="action-btn preview"
                                onClick={() => setShowShareCard(true)}
                            >
                                Preview Card
                            </button>
                            <button
                                className="action-btn download"
                                onClick={handleGenerateImage}
                                disabled={isGenerating}
                            >
                                {isGenerating ? 'Generating...' : 'Download Image'}
                            </button>
                            <button
                                className="action-btn share"
                                onClick={handleShare}
                            >
                                Share
                            </button>
                            <button
                                className="action-btn clear"
                                onClick={onClear}
                            >
                                Clear All
                            </button>
                        </div>
                    )}
                </div>
            </aside>

            {/* Share Card Preview Modal */}
            {showShareCard && (
                <div className="share-card-modal" onClick={() => setShowShareCard(false)}>
                    <div className="share-card-container" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="share-card-close"
                            onClick={() => setShowShareCard(false)}
                        >
                            ✕
                        </button>

                        {/* The actual share card */}
                        <div className="share-card" ref={shareCardRef}>
                            <h2 className="share-card-title">My Top 5 Afrobeats Albums</h2>
                            <p className="share-card-year">2025</p>

                            <div className="share-card-albums">
                                {albums.map((album, index) => (
                                    <div key={album.id} className="share-card-album">
                                        <span className="share-album-rank">{index + 1}</span>
                                        <img
                                            src={album.artwork}
                                            alt={album.title}
                                            className="share-album-art"
                                        />
                                        <div className="share-album-info">
                                            <span className="share-album-title">{album.title}</span>
                                            <span className="share-album-artist">{album.artist}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="share-card-credit">
                                Made with 2025 Afrobeats Album Repository
                            </p>
                        </div>

                        <div className="share-card-actions">
                            <button onClick={handleGenerateImage} disabled={isGenerating}>
                                {isGenerating ? 'Generating...' : 'Download as Image'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
