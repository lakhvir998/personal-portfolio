import { AppHeader, type NavigationLink } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import {
  profile,
  skillCategories,
  experiences,
  projects,
  socialLinks,
} from './data/portfolio';

/**
 * In-page navigation anchors surfaced in the header.
 */
const navigationLinks: readonly NavigationLink[] = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

/**
/**
 * Root application rendering the full portfolio experience.
 */
const App = () => (
  <div className='relative min-h-screen overflow-x-hidden bg-[rgb(var(--color-background)/1)] text-white'>
    <AppHeader links={navigationLinks} profile={profile} />
    <main className='flex flex-col gap-6'>
      <HeroSection profile={profile} socials={socialLinks} />
      <SkillsSection categories={skillCategories} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <ContactSection profile={profile} />
    </main>
    <AppFooter socials={socialLinks} profileName={profile.name} />
  </div>
);

export default App;
