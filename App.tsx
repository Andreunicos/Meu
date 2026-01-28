
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import RobloxSection from './components/RobloxSection';
import UnrealSection from './components/UnrealSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <RobloxSection />
        <UnrealSection />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
