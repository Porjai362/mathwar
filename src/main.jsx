
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '@/App';
import CreditsPage from '@/pages/CreditsPage';
import '@/index.css';
import { SupabaseProvider } from '@/lib/SupabaseProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/credits" element={<CreditsPage />} />
        </Routes>
      </Router>
    </SupabaseProvider>
  </React.StrictMode>
);
