import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import { ContextProvider } from './context/contextApi';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
