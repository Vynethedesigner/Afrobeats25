import { useRef } from 'react';
import { albums } from '../data/albums';
import './HeroSection.css';

interface HeroSectionProps {
    onScrollComplete: () => void;
}

export function HeroSection({ onScrollComplete }: HeroSectionProps) {
    const containerRef = useRef<HTMLElement>(null);

    const handleScroll = () => {
        onScrollComplete();
        const nextSection = document.querySelector('.album-grid-section');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    // Use a larger set and triplicate it for seamless marquee
    const sourceAlbums = albums.slice(0, 12);
    const heroAlbums = [...sourceAlbums, ...sourceAlbums, ...sourceAlbums];

    return (
        <section className="hero-section" ref={containerRef}>
            <div className="hero-content">
                <div className="hero-text-container">
                    <h1 className="hero-title">
                        A curated collection of<br />
                        every Afrobeats album<br />
                        that defined 2025.
                    </h1>

                    <div className="hero-powered">
                        Powered by <strong>wetalksound</strong>
                        <span className="powered-logo-dot"></span>
                    </div>
                </div>

                <div className="bottom-area">
                    <div className="hero-grid-wrapper">
                        {/* Button Centered Over Grid */}
                        <div className="scroll-pill-container">
                            <button
                                className="scroll-pill"
                                onClick={handleScroll}
                                aria-label="Scroll to begin"
                            >
                                <span>Scroll to begin</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9.5L1.5 5L2.55 3.95L6 7.4L9.45 3.95L10.5 5L6 9.5Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrolling Strip */}
                        <div className="hero-album-strip">
                            <div className="album-strip-track">
                                {heroAlbums.map((album, index) => (
                                    <div key={`hero-strip-${album.id}-${index}`} className="strip-album-cover">
                                        <img src={album.artwork} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
