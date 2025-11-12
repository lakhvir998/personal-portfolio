import { render, screen, within } from '@testing-library/react'
import { ProjectsSection } from '../ProjectsSection'
import type { ProjectItem } from '../../data/portfolio'

const mockProjects: readonly ProjectItem[] = [
  {
    name: 'Test App',
    description: 'An example project for testing.',
    stack: ['React', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/test-app',
  },
  {
    name: 'Code Only',
    description: 'Repository link without deployment.',
    stack: ['Node.js'],
    repoUrl: 'https://github.com/example/code-only',
  },
]

/**
 * Renders the projects section with mock data for assertions.
 */
const renderProjects = (): void => {
  render(<ProjectsSection projects={mockProjects} />)
}

describe('ProjectsSection', () => {
  /**
   * Verifies call-to-action buttons respect project metadata.
   */
  it('shows live and code links when available', () => {
    renderProjects()

    expect(screen.getByRole('link', { name: /Live preview/i })).toHaveAttribute(
      'href',
      mockProjects[0].liveUrl,
    )
    const firstProjectCard = screen.getByText(mockProjects[0].name).closest('article')
    expect(firstProjectCard).not.toBeNull()
    if (firstProjectCard) {
      expect(
        within(firstProjectCard).getByRole('link', { name: /View code/i }),
      ).toHaveAttribute('href', mockProjects[0].repoUrl)
    }
  })

  /**
   * Ensures projects without live URLs do not render the action.
   */
  it('omits live preview button when unavailable', () => {
    renderProjects()

    expect(screen.getAllByRole('link', { name: /View code/i })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /Live preview/i })).toHaveLength(1)
  })
})

