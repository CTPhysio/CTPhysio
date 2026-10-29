import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeHelp from './components/WhoWeHelp';
import TeamIntro from './components/TeamIntro';
import HowWeHelp from './components/HowWeHelp';
import HowCanWeHelp from './components/HowCanWeHelp';
import GoogleReviewsSlider from './components/GoogleReviewsSlider';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ListenWatch from './components/ListenWatch';
import Footer from './components/Footer';
import TrustpilotBanner from './components/TrustpilotBanner';

const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const AboutPage = lazy(() => import('./components/Team'));
const BackPain = lazy(() => import('./components/BackPain'));
const ShoulderPain = lazy(() => import('./components/ShoulderPain'));
const OrthopedicRehab = lazy(() => import('./components/OrthopedicRehab'));
const SurgicalRehab = lazy(() => import('./components/SurgicalRehab'));
const RunnerTriathleteRehab = lazy(() => import('./components/RunnerTriathleteRehab'));
const OveruseInjuries = lazy(() => import('./components/OveruseInjuries'));
const SpinalInjuries = lazy(() => import('./components/SpinalInjuries'));
const Arthritis = lazy(() => import('./components/Arthritis'));
const SportsInjuries = lazy(() => import('./components/SportsInjuries'));
const KneePain = lazy(() => import('./components/KneePain'));
const NeckPain = lazy(() => import('./components/NeckPain'));
const HipPain = lazy(() => import('./components/HipPain'));
const Sciatica = lazy(() => import('./components/Sciatica'));
const BalanceFalls = lazy(() => import('./components/BalanceFalls'));
const Deconditioning = lazy(() => import('./components/Deconditioning'));
const Events = lazy(() => import('./components/Events'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const StrengthRehabClasses = lazy(() => import('./components/StrengthRehabClasses'));
const Over60sStrengthClasses = lazy(() => import('./components/Over60sStrengthClasses'));
const EventWaitingListConfirmed = lazy(() => import('./components/EventWaitingListConfirmed'));
const Booking = lazy(() => import('./components/Booking'));
const AdvicePage = lazy(() => import('./components/AdvicePage'));
const ArticlePage = lazy(() => import('./components/ArticlePage'));
const FloorTransfersArticle = lazy(() => import('./components/FloorTransfersArticle'));
const AdviceSection = lazy(() => import('./components/AdviceSection'));
const StrengthTrainingOver60s = lazy(() => import('./components/StrengthTrainingOver60s'));

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
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
              <WhoWeHelp />
              <TeamIntro />
              <HowWeHelp />
              <HowCanWeHelp />
              <GoogleReviewsSlider />
              <FAQ />
              <FinalCTA />
              <AdviceSection />
              <ListenWatch />
            </>
          } />
          <Route path="/services" element={
            <Suspense fallback={null}><Services /></Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={null}><Contact /></Suspense>
          } />
          <Route path="/booking" element={
            <Suspense fallback={null}><Booking /></Suspense>
          } />
          <Route path="/advice" element={
            <Suspense fallback={null}><AdvicePage /></Suspense>
          } />
          <Route path="/advice/injury-prevention-womens-football" element={
            <Suspense fallback={null}><ArticlePage /></Suspense>
          } />
          <Route path="/advice/getting-up-from-the-floor-as-you-get-older" element={
            <Suspense fallback={null}><FloorTransfersArticle /></Suspense>
          } />
          <Route path="/insights" element={
            <Suspense fallback={null}><AdvicePage /></Suspense>
          } />
          <Route path="/insights/injury-prevention-womens-football" element={
            <Suspense fallback={null}><ArticlePage /></Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={null}><AboutPage /></Suspense>
          } />
          <Route path="/strength-training-over-60s" element={
            <Suspense fallback={null}><StrengthTrainingOver60s /></Suspense>
          } />
          <Route path="/events" element={
            <Suspense fallback={null}><Events /></Suspense>
          } />
          <Route path="/privacy-policy" element={
            <Suspense fallback={null}><PrivacyPolicy /></Suspense>
          } />
          <Route path="/terms-of-service" element={
            <Suspense fallback={null}><TermsOfService /></Suspense>
          } />
          <Route path="/strength-rehab-classes" element={
            <Suspense fallback={null}><StrengthRehabClasses /></Suspense>
          } />
          <Route path="/over-60s-strength-classes" element={
            <Suspense fallback={null}><Over60sStrengthClasses /></Suspense>
          } />
          <Route path="/event-waiting-list-confirmed" element={
            <Suspense fallback={null}><EventWaitingListConfirmed /></Suspense>
          } />
          <Route path="/treatments/back-pain" element={
            <Suspense fallback={null}><BackPain /></Suspense>
          } />
          <Route path="/treatments/shoulder-pain" element={
            <Suspense fallback={null}><ShoulderPain /></Suspense>
          } />
          <Route path="/treatments/orthopedic-rehab" element={
            <Suspense fallback={null}><OrthopedicRehab /></Suspense>
          } />
          <Route path="/treatments/surgical-rehab" element={
            <Suspense fallback={null}><SurgicalRehab /></Suspense>
          } />
          <Route path="/treatments/runner-triathlete-rehab" element={
            <Suspense fallback={null}><RunnerTriathleteRehab /></Suspense>
          } />
          <Route path="/treatments/overuse-injuries" element={
            <Suspense fallback={null}><OveruseInjuries /></Suspense>
          } />
          <Route path="/treatments/spinal-injuries" element={
            <Suspense fallback={null}><SpinalInjuries /></Suspense>
          } />
          <Route path="/treatments/arthritis" element={
            <Suspense fallback={null}><Arthritis /></Suspense>
          } />
          <Route path="/treatments/sports-injuries" element={
            <Suspense fallback={null}><SportsInjuries /></Suspense>
          } />
          <Route path="/treatments/knee-pain" element={
            <Suspense fallback={null}><KneePain /></Suspense>
          } />
          <Route path="/treatments/neck-pain" element={
            <Suspense fallback={null}><NeckPain /></Suspense>
          } />
          <Route path="/treatments/hip-pain" element={
            <Suspense fallback={null}><HipPain /></Suspense>
          } />
          <Route path="/treatments/sciatica" element={
            <Suspense fallback={null}><Sciatica /></Suspense>
          } />
          <Route path="/treatments/balance-falls" element={
            <Suspense fallback={null}><BalanceFalls /></Suspense>
          } />
          <Route path="/treatments/deconditioning" element={
            <Suspense fallback={null}><Deconditioning /></Suspense>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
