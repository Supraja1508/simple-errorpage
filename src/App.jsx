// src/App.jsx
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (location.pathname === '/' && initialLoad) {
      setInitialLoad(false);
    }
  }, [location]);

  const toggleDark = () => setDark(!dark);

  const commonStyle = {
    backgroundColor: dark ? '#111' : '#f5f5f5',
    color: dark ? '#fff' : '#000',
    minHeight: '100vh',
    margin: 0,
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: dark ? '#222' : '#ddd',
    padding: '1rem 2rem',
    width: '100%',
  };

  const linkStyle = {
    color: dark ? '#fff' : '#000',
    textDecoration: 'none',
    marginRight: '1rem',
    fontWeight: 'bold',
  };

  const navGroupStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const pageStyle = {
    padding: '2rem',
  };

  const ErrorPage = () => (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '3rem', color: 'red' }}>404</h1>
      <p>Page not found.</p>
    </div>
  );

  const Home = () => (
    <div style={pageStyle}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to our homepage!</p>
    </div>
  );

  const About = () => (
    <div style={pageStyle}>
      <h1>📖 About Us</h1>
      <p>This is the About Us page.</p>
    </div>
  );

  const Contact = () => (
    <div style={pageStyle}>
      <h1>📞 Contact Us</h1>
      <p>You can contact us anytime!</p>
    </div>
  );

  return (
    <div style={commonStyle}>
      <nav style={navStyle}>
        <div style={navGroupStyle}>
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/contact" style={linkStyle}>Contact Us</Link>
        </div>
        <button onClick={toggleDark}>
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
