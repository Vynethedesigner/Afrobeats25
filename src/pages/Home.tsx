import { useRef } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AlbumGrid } from '../components/AlbumGrid';
import { Top5Panel } from '../components/Top5Panel';
import { useNavigate } from 'react-router-dom';
import type { Album } from '../types';

interface HomeProps {
    onAddToTop5: (album: Album) => void;
    isInTop5: (id: string) => boolean;
    top5: Album[];
    onRemoveFromTop5: (id: string) => void;
    onClearTop5: () => void;
    onReorderTop5: (albums: Album[]) => void;
}

export function Home({ onAddToTop5, isInTop5, top5, onRemoveFromTop5, onClearTop5, onReorderTop5 }: HomeProps) {
    const navigate = useNavigate();
    const gridRef = useRef<HTMLElement>(null);

    const handleScrollComplete = () => {
        console.log("Hero scroll complete");
    };

    const handleAlbumClick = (album: Album) => {
        navigate(`/album/${album.id}`);
    };

    return (
        <div className="home-page">
            <HeroSection onScrollComplete={handleScrollComplete} />

            <main ref={gridRef}>
                <AlbumGrid
                    onAlbumClick={handleAlbumClick}
                    onAddToTop5={onAddToTop5}
                    isInTop5={isInTop5}
                />
            </main>

            <Top5Panel
                albums={top5}
                onRemove={onRemoveFromTop5}
                onClear={onClearTop5}
                onReorder={onReorderTop5}
            />
        </div>
    );
}
