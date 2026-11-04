import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import OrderOptions from './pages/OrderOptions';
import Sell from './pages/Sell';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div style={{ minWidth: 0, width: '100%', overflowX: 'hidden' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sell" element={<Layout><Sell /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/order/:id" element={<Layout><OrderOptions /></Layout>} />
        {['clothes', 'shoes', 'bags', 'accessories'].map(cat => (
          <Route key={cat} path={`/${cat}`} element={<Layout><CategoryPage key={cat} /></Layout>} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
