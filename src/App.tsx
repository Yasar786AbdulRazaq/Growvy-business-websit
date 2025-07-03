import React from 'react';
import FloatingNavigation from './components/FloatingNavigation';
import WebsiteHeader from './components/WebsiteHeader';
import WebsiteFooter from './components/WebsiteFooter';
import HomeSection from './sections/HomeSection';
import JobsSection from './sections/JobsSection';
import ServicesSection from './sections/ServicesSection';
import SuccessSection from './sections/SuccessSection';
import PricingSection from './sections/PricingSection';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Website Header - appears only at the top */}
      <WebsiteHeader />
      
      {/* Floating Navigation - always visible */}
      <FloatingNavigation />
      
      {/* Main Content - all sections in one continuous flow */}
      <main>
        <HomeSection />
        <JobsSection />
        <ServicesSection />
        <SuccessSection />
        <PricingSection />
      </main>
      
      {/* Website Footer - appears only at the bottom */}
      <WebsiteFooter />
    </div>
  );
};

export default App;

