import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// BrowserRouter as Router^
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import VideoProjects from './components/VideoProjects';
import Photography from './components/Photography';
import WorkExperience from './components/WorkExperience';
import Affiliations from './components/Affiliations';
import Footer from './components/Footer';
import AllWork from './pages/AllWork';
import ScrollToTop from './components/ScrollToTop';


// Layout to keep Navbar/Footer on every page
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet /> {/* page content goes here */}
      <footer id="footer">
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
}

// Homepage component
function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="video-projects">
          <VideoProjects />
        </section>
        <section id="photography">
          <Photography />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="affiliations">
          <Affiliations />
        </section>
      </main>
    </>
  );
}

// Main App component with routing to All Work page
// <Router basename="/jack-giancotti-portfolio">
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/allwork" element={<AllWork />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
