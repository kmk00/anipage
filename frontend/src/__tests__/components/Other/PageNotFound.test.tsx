import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PageNotFound from 'components/Other/PageNotFound'

describe('PageNotFound component', () => {
  it('renders the default error message when no error is provided', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )

    const errorMessage = getByText('Page not found')
    expect(errorMessage).toBeInTheDocument()
  })

  it('renders a custom error message when provided', () => {
    const customError = 'Custom error message'
    const { getByText } = render(
      <MemoryRouter>
        <PageNotFound error={customError} />
      </MemoryRouter>
    )

    const errorMessage = getByText(customError)
    expect(errorMessage).toBeInTheDocument()
  })

  it('renders link to home page with correct href', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )

    const linkElement = getByText('Back to Home')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.getAttribute('href')).toBe('/')
  })

  it('applies the correct styling classes to the elements', () => {
    const { container } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )

    const divElement = container.querySelector('div')
    const linkElement = container.querySelector('a')

    expect(divElement).toHaveClass(
      'bg-primary',
      'text-secondary',
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
      'h-screen'
    )
    expect(linkElement).toHaveClass(
      'mt-4',
      'underline',
      'underline-offset-4',
      'text-xl',
      'transition-all',
      'duration-300',
      'ease-in',
      'hover:text-accent'
    )
  })
})
