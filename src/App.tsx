import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navbar";
import Routes from "./routes/route";
import { useEffect } from "react";
import { ScrollReveal } from "./components/ScrollReveal";
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page
  }, [location]); // This effect runs every time the location changes

  return null; // This component doesn’t render anything
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <ScrollToTop />
        <Routes />
        {/* Footer */}
        <ScrollReveal>
        <Footer />
        </ScrollReveal>
      </div>
    </Router>
  );
}

export default App;
