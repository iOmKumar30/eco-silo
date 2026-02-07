import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PosterSection from "./components/PosterSection";
import ProjectDetails from "./components/ProjectDetails";
import ReportSection from "./components/ReportSection";
import Team from "./components/Team";
import VideoDemo from "./components/VideoDemo";
function App() {
  return (
    <div className="min-h-screen bg-eco-dark text-white selection:bg-eco-green selection:text-black">
      <Navbar />
      <Hero />
      <ProjectDetails />
      <PosterSection />
      <VideoDemo />
      <ReportSection />
      <Team />

      <footer className="py-8 text-center text-gray-600 border-t border-white/5">
        <p>© 2026 Eco-Silo Project</p>
      </footer>
    </div>
  );
}

export default App;
