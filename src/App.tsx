import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AlbumDetails } from './pages/AlbumDetails';
import type { Album } from './types';
import './App.css';

function App() {
  const [top5, setTop5] = useState<Album[]>([]);

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
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAddToTop5={handleAddToTop5}
                isInTop5={isInTop5}
                top5={top5}
                onRemoveFromTop5={handleRemoveFromTop5}
                onClearTop5={handleClearTop5}
                onReorderTop5={handleReorderTop5}
              />
            }
          />
          <Route
            path="/album/:id"
            element={
              <AlbumDetails
                onAddToTop5={handleAddToTop5}
                isInTop5={isInTop5}
                top5={top5}
                onRemoveFromTop5={handleRemoveFromTop5}
                onClearTop5={handleClearTop5}
                onReorderTop5={handleReorderTop5}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
