import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';

const LazyAboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const LazyContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const LazyBlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const LazyWeBuyVinylPage = lazy(() => import('./pages/WeBuyVinylPage.jsx'));
const LazyNotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<LazyAboutPage />} />
            <Route path="/contact" element={<LazyContactPage />} />
            <Route path="/blog" element={<LazyBlogPage />} />
            <Route path="/we-buy-vinyl" element={<LazyWeBuyVinylPage />} />
            <Route path="*" element={<LazyNotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;