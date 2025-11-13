import { motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { PageSection } from '../components/PageSection';
import type { Profile } from '../data/portfolio';

export interface ContactSectionProps {
  /** Profile metadata providing a contact address. */
  readonly profile: Profile;
}

/**
 * Closing section encouraging collaboration inquiries with a pronounced call-to-action.
 */
export const ContactSection = ({ profile }: ContactSectionProps) => (
  <PageSection className='relative' id='contact'>
    <div className='overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.03] px-8 py-12 shadow-[0_30px_80px_rgba(2,6,23,0.45)] sm:px-12'>
      <SectionHeading
        align='center'
        eyebrow='Collaborate'
        title="Let's shape the next release together"
        description="Have a product idea, a tricky refactor, or a design system in need of polish? I'd love to chat about how we can accelerate your roadmap."
      />

      <motion.div
        className='mt-10 flex flex-col items-center gap-4 text-center text-white/70'
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Button
          href={`mailto:${profile.email}`}
          size='lg'
          variant='primary'
          onClick={() => {
            ReactGA.event({
              category: 'Button',
              action: 'Click',
              label: 'Start a conversation',
            });
          }}
        >
          Start a conversation
        </Button>
        <span className='text-sm font-medium text-white/50'>
          Available for freelance partnerships and select full-time roles.
        </span>
      </motion.div>
    </div>
  </PageSection>
);
