import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AuthModal } from './components/AuthModal';
import { TopNavbar } from './components/TopNavbar';
import { LeftSidebar } from './components/LeftSidebar';
import { Dashboard } from './components/pages/Dashboard';
import { Vulnerabilities } from './components/pages/Vulnerabilities';
import { PentesterLLM } from './components/pages/PentesterLLM';
import { AddHost } from './components/pages/AddHost';
import { Recon } from './components/pages/Recon';
import { Chat } from './components/pages/Chat';
import { FalsePositives } from './components/pages/FalsePositives';
import { Campaigns } from './components/pages/Campaigns';
import { Reports } from './components/pages/Reports';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedOrg, setSelectedOrg] = useState('CyberCorp Inc.');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard isDarkMode={isDarkMode} />;
      case 'vulnerabilities':
        return <Vulnerabilities isDarkMode={isDarkMode} />;
      case 'pentester-llm':
        return <PentesterLLM isDarkMode={isDarkMode} />;
      case 'add-host':
        return <AddHost isDarkMode={isDarkMode} />;
      case 'recon':
        return <Recon isDarkMode={isDarkMode} />;
      case 'chat':
        return <Chat isDarkMode={isDarkMode} />;
      case 'false-positives':
        return <FalsePositives isDarkMode={isDarkMode} />;
      case 'campaigns':
        return <Campaigns isDarkMode={isDarkMode} />;
      case 'reports':
        return <Reports isDarkMode={isDarkMode} />;
      default:
        return <Dashboard isDarkMode={isDarkMode} />;
    }
  };

  if (!showDashboard) {
    return (
      <>
        <LandingPage onGetStarted={() => setShowAuthModal(true)} />
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)}
          onLogin={() => {
            setShowAuthModal(false);
            setShowDashboard(true);
          }}
        />
      </>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0f1117] dark' : 'bg-gray-50'
    }`}>
      <TopNavbar
        selectedOrg={selectedOrg}
        onOrgChange={setSelectedOrg}
        onToggleDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <div className="flex pt-16">
        <LeftSidebar currentPage={currentPage} onPageChange={setCurrentPage} isDarkMode={isDarkMode} />
        <main className="flex-1 p-8 transition-all duration-300">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}