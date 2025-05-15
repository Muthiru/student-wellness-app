import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import ResourceDetailPage from './pages/ResourceDetailPage';
import EmergencyHelpPage from './pages/EmergencyHelpPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Header />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resource/:id" element={<ResourceDetailPage />} />
            <Route path="/emergency" element={<EmergencyHelpPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;