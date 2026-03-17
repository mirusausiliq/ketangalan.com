import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import News from '@/pages/News';
import Sources from '@/pages/Sources';
import Dictionary from '@/pages/Dictionary';
import WordDetail from '@/pages/WordDetail';
import Recorder from '@/pages/Recorder';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/dictionary/:id" element={<WordDetail />} />
        <Route path="/recorder" element={<Recorder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;