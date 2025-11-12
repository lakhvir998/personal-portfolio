import { render, screen } from '@testing-library/react'
import { HeroSection } from '../HeroSection'
import type { Profile, SocialLink } from '../../data/portfolio'

const mockProfile: Profile = {
  name: 'Test User',
  headline: 'Product-Focused Engineer',
  about: 'Building polished experiences with measurable impact.',
  location: 'Remote, Earth',
  email: 'test@example.com',
}

const mockSocials: readonly SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/test' },
]

/**
 * Renders the hero section with default test data.
 */
const renderHero = (): void => {
  render(<HeroSection profile={mockProfile} socials={mockSocials} />)
}

describe('HeroSection', () => {
  /**
   * Ensures the hero introduces the profile and key content.
   */
  it('renders hero content with headline and social links', () => {
    renderHero()

    expect(screen.getByRole('heading', { name: /test user/i })).toBeVisible()
    expect(screen.getByText(/Product-Focused Engineer/i)).toBeVisible()
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      mockSocials[0].href,
    )
    expect(screen.getByRole('link', { name: /Let's build together/i })).toHaveAttribute(
      'href',
      `mailto:${mockProfile.email}`,
    )
  })
})

