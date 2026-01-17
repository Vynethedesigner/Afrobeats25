import { useState, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { AlbumGrid } from './components/AlbumGrid';
import { AlbumModal } from './components/AlbumModal';
import { Top5Panel } from './components/Top5Panel';
import type { Album } from './types';
import './App.css';

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [top5, setTop5] = useState<Album[]>([]);
  const gridRef = useRef<HTMLElement>(null);

  const handleScrollComplete = () => {
    // Optional: Smooth scroll to grid or unlock something
    // For now, just a placeholder or subtle scroll check
    console.log("Hero scroll complete");
  };

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  const handleAddToTop5 = (album: Album) => {
    if (top5.some(a => a.id === album.id)) {
      alert("This album is already in your Top 5!");
      return;
    }
    if (top5.length >= 5) {
      alert("Your Top 5 is full! Remove an album to add a new one.");
      return;
    }
    setTop5([...top5, album]);
  };

  const handleRemoveFromTop5 = (albumId: string) => {
    setTop5(top5.filter(a => a.id !== albumId));
  };

  const handleReorderTop5 = (newOrder: Album[]) => {
    setTop5(newOrder);
  };

  const handleClearTop5 = () => {
    if (window.confirm("Are you sure you want to clear your Top 5?")) {
      setTop5([]);
    }
  };

  const isInTop5 = (albumId: string) => {
    return top5.some(a => a.id === albumId);
  };

  return (
    <div className="app">
      <HeroSection onScrollComplete={handleScrollComplete} />

      <main ref={gridRef}>
        <AlbumGrid
          onAlbumClick={handleAlbumClick}
          onAddToTop5={handleAddToTop5}
          isInTop5={isInTop5}
        />
      </main>

      <Top5Panel
        albums={top5}
        onRemove={handleRemoveFromTop5}
        onClear={handleClearTop5}
        onReorder={handleReorderTop5}
      />

      {selectedAlbum && (
        <AlbumModal
          album={selectedAlbum}
          onClose={handleCloseModal}
          onAddToTop5={handleAddToTop5}
          isInTop5={isInTop5(selectedAlbum.id)}
        />
      )}
    </div>
  );
}

export default App;
