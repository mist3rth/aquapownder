import { Navbar } from './layouts/Navbar';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Usage } from './components/sections/Usage';
import { Science } from './components/sections/Science';
import { Comparison } from './components/sections/Comparison';
import { Offers } from './components/sections/Offers';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './layouts/Footer';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <Problem />
        </ErrorBoundary>
        <ErrorBoundary>
          <Usage />
        </ErrorBoundary>
        <ErrorBoundary>
          <Science />
        </ErrorBoundary>
        <ErrorBoundary>
          <Comparison />
        </ErrorBoundary>
        <ErrorBoundary>
          <Offers />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>
        <ErrorBoundary>
          <FinalCTA />
        </ErrorBoundary>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
