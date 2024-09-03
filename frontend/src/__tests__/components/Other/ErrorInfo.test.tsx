import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import ErrorInfo from 'components/Other/ErrorInfo'

describe('ErrorInfo component', () => {
  it('renders with custom text', () => {
    const { getByText } = render(<ErrorInfo text="Custom error message" />)
    expect(getByText('Custom error message')).toBeInTheDocument()
  })

  it('renders error image with alt text', () => {
    const { getByAltText } = render(<ErrorInfo text="Error message" />)
    expect(getByAltText('Error image')).toBeInTheDocument()
  })

  it('throws an error when text prop is missing', () => {
    // @ts-ignore
    expect(() => render(<ErrorInfo />)).toThrowError('Text is required')
  })
})
