import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Title from 'components/Navigation/Title'

describe('Title component', () => {
  it('renders with default props', () => {
    const { container } = render(<Title text="Default Title" />, {
      wrapper: MemoryRouter
    })
    expect(container).toBeInTheDocument()
  })

  it('renders with custom text prop', () => {
    const { getByText } = render(<Title text="Custom Title" />, {
      wrapper: MemoryRouter
    })
    expect(getByText('Custom Title')).toBeInTheDocument()
  })

  it('check link href attribute', () => {
    const { getByRole } = render(<Title text="Home" />, {
      wrapper: MemoryRouter
    })
    const link = getByRole('link')
    expect(link.getAttribute('href')).toBe('/')
  })

  it('check link className attribute', () => {
    const { getByRole } = render(<Title text="Home" />, {
      wrapper: MemoryRouter
    })
    const link = getByRole('link')
    expect(link.getAttribute('class')).toContain(
      'text-3xl text-accent font-medium'
    )
  })
})
