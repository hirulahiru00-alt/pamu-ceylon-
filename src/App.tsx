import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { TourModal } from '@/src/components/TourModal';
import { DestinationModal } from '@/src/components/DestinationModal';
import { ConfigNoticeModal } from '@/src/components/ConfigNoticeModal';

import { HomePage } from '@/src/pages/HomePage';
import { ToursPage } from '@/src/pages/ToursPage';
import { DestinationsPage } from '@/src/pages/DestinationsPage';
import { AirportPickupPage } from '@/src/pages/AirportPickupPage';
import { VehicleHirePage } from '@/src/pages/VehicleHirePage';
import { HotelBookingPage } from '@/src/pages/HotelBookingPage';
import { GalleryPage } from '@/src/pages/GalleryPage';
import { AboutPage } from '@/src/pages/AboutPage';
import { ContactPage } from '@/src/pages/ContactPage';

import { TourPackage } from '@/src/data/toursData';
import { Destination } from '@/src/data/destinationsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Sync with URL Hash for deep linking and refresh support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: NavPage[] = [
        'home', 'tours', 'destinations', 'airport', 'vehicles', 'hotels', 'gallery', 'about', 'contact'
      ];
      if (validPages.includes(hash as NavPage)) {
        setCurrentPage(hash as NavPage);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800">
      
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConfigModal={() => setIsConfigModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectTour={(tour) => setSelectedTour(tour)}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
          />
        )}

        {currentPage === 'tours' && (
          <ToursPage
            onSelectTour={(tour) => setSelectedTour(tour)}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            onSelectDestination={(dest) => setSelectedDestination(dest)}
          />
        )}

        {currentPage === 'airport' && (
          <AirportPickupPage />
        )}

        {currentPage === 'vehicles' && (
          <VehicleHirePage />
        )}

        {currentPage === 'hotels' && (
          <HotelBookingPage />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenConfigModal={() => setIsConfigModalOpen(true)}
          />
        )}
      </main>

      {/* Persistent Floating WhatsApp Helper */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConfigModal={() => setIsConfigModalOpen(true)}
      />

      {/* Modals */}
      <TourModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
      />

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

      <ConfigNoticeModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
      />

    </div>
  );
}
