import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import PainPoints from './components/PainPoints';
import TestimonialSlider from './components/TestimonialSlider';
import DiscoveryVisit from './components/DiscoveryVisit';
import FAQ from './components/FAQ';
import GoogleReviewsSlider from './components/GoogleReviewsSlider';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TrustpilotBanner from './components/TrustpilotBanner';
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import JourneySteps from './components/JourneySteps';
import TreatmentConditions from './components/TreatmentConditions';
import BackPain from './components/BackPain';
import ShoulderPain from './components/ShoulderPain';
import OrthopedicRehab from './components/OrthopedicRehab';
import SurgicalRehab from './components/SurgicalRehab';
import RunnerTriathleteRehab from './components/RunnerTriathleteRehab';
import OveruseInjuries from './components/OveruseInjuries';
import SpinalInjuries from './components/SpinalInjuries';
import Arthritis from './components/Arthritis';
import SportsInjuries from './components/SportsInjuries';
import KneePain from './components/KneePain';
import NeckPain from './components/NeckPain';
import HipPain from './components/HipPain';
import Sciatica from './components/Sciatica';
import BalanceFalls from './components/BalanceFalls';
import Deconditioning from './components/Deconditioning';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollToTop />
      <TrustpilotBanner />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <JourneySteps />
              <VideoSection />
              <PainPoints />
              <TestimonialSlider />
              <About />
              <TreatmentConditions />
              <DiscoveryVisit />
              <FAQ />
              <GoogleReviewsSlider />
              <FinalCTA />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/treatments/back-pain" element={<BackPain />} />
          <Route path="/treatments/shoulder-pain" element={<ShoulderPain />} />
          <Route path="/treatments/orthopedic-rehab" element={<OrthopedicRehab />} />
          <Route path="/treatments/surgical-rehab" element={<SurgicalRehab />} />
          <Route path="/treatments/runner-triathlete-rehab" element={<RunnerTriathleteRehab />} />
          <Route path="/treatments/overuse-injuries" element={<OveruseInjuries />} />
          <Route path="/treatments/spinal-injuries" element={<SpinalInjuries />} />
          <Route path="/treatments/arthritis" element={<Arthritis />} />
          <Route path="/treatments/sports-injuries" element={<SportsInjuries />} />
          <Route path="/treatments/knee-pain" element={<KneePain />} />
          <Route path="/treatments/neck-pain" element={<NeckPain />} />
          <Route path="/treatments/hip-pain" element={<HipPain />} />
          <Route path="/treatments/sciatica" element={<Sciatica />} />
          <Route path="/treatments/balance-falls" element={<BalanceFalls />} />
          <Route path="/treatments/deconditioning" element={<Deconditioning />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;