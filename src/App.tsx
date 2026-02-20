import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import HallPage from './pages/HallPage';
import OfficePage from './pages/OfficePage';
import VirtualOfficePage from './pages/VirtualOfficePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import CookiesPage from './pages/CookiesPage';
import SitemapPage from './pages/SitemapPage';
import PromotionsPage from './pages/PromotionsPage';

import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white font-sans text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hall" element={<HallPage />} />
          <Route path="/office" element={<OfficePage />} />
          <Route path="/virtual-office" element={<VirtualOfficePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
