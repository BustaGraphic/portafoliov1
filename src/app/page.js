import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";


export default function Home() {
  const backgroundStyle = {
    background: 'conic-gradient(from 249deg at 44.37% 62.15%, rgba(0, 0, 0, 0.20) 0deg, rgba(44, 48, 85, 0.20) 360deg), conic-gradient(from 84deg at 50% 14.96%, #050507 0deg, #06070A 9.087129682302475deg, #0F1425 360deg)',
    minHeight: '100vh',  // Ajusta la altura según tus necesidades
  };

  return (
    <main className="fuente" style={backgroundStyle}>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />

        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
