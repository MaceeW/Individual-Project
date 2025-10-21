import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';

// Use React.lazy for code-splitting. This means the code for these pages
// will only be loaded when the user navigates to them, improving initial page load time.
const LazyAboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const LazyContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const LazyBlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const LazyWeBuyVinylPage = lazy(() => import('./pages/WeBuyVinylPage.jsx'));
const LazyNotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  return (
    <>
      {/* The Navbar component is always displayed at the top of the page for consistent navigation. */}
      <Navbar />
      <div className="main-content">
        {/* Suspense is used with React.lazy to show a fallback UI (like a loading message)
            while the lazy-loaded components are being fetched. */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Each Route maps a URL path to a specific component. */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<LazyAboutPage />} />
            <Route path="/contact" element={<LazyContactPage />} />
            <Route path="/blog" element={<LazyBlogPage />} />
            <Route path="/we-buy-vinyl" element={<LazyWeBuyVinylPage />} />
            
            {/* This is a catch-all route. If no other path matches, it renders the NotFoundPage. */}
            <Route path="*" element={<LazyNotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      {/* The Footer component is always displayed at the bottom of the page. */}
      <Footer />
    </>
  );
}

export default App;