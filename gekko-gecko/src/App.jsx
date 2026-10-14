import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Sell from './pages/Sell';

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
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sell" element={<Layout><Sell /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
        {['clothes', 'shoes', 'bags', 'accessories'].map(cat => (
          <Route key={cat} path={`/${cat}`} element={<Layout><CategoryPage key={cat} /></Layout>} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
