import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
