import { render, screen } from '@testing-library/react'
import LetterSelect from 'components/Navigation/LetterSelect'

describe('LetterSelect component', () => {
  it('renders the full alphabet by default', () => {
    render(<LetterSelect />)

    const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    letters.forEach((letter) => {
      const letterElement = screen.getByText(letter)
      expect(letterElement).toBeInTheDocument()
      expect(letterElement).toHaveAttribute('href', `#studios-${letter}`)
    })
  })

  it('renders a filtered alphabet when alphabetFiltered is provided', () => {
    const filteredAlphabet = ['A', 'B', 'C']
    render(<LetterSelect alphabetFiltered={filteredAlphabet} />)

    filteredAlphabet.forEach((letter) => {
      const letterElement = screen.getByText(letter)
      expect(letterElement).toBeInTheDocument()
      expect(letterElement).toHaveAttribute('href', `#studios-${letter}`)
    })

    const nonExistentLetters = '#DEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    nonExistentLetters.forEach((letter) => {
      const letterElement = screen.queryByText(letter)
      expect(letterElement).toBeNull()
    })
  })

  it('applies the correct href and key attributes', () => {
    render(<LetterSelect />)

    const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    letters.forEach((letter) => {
      const letterElement = screen.getByText(letter)
      expect(letterElement).toHaveAttribute('href', `#studios-${letter}`)
    })
  })

  it('applies the correct background class based on index', () => {
    render(<LetterSelect />)

    const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    letters.forEach((letter, index) => {
      const letterElement = screen.getByText(letter)
      if (index % 2 === 0) {
        expect(letterElement).toHaveClass('bg-primaryLight')
      } else {
        expect(letterElement).toHaveClass('bg-primary')
      }
    })
  })

  it('applies hover classes correctly', () => {
    render(<LetterSelect />)

    const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    letters.forEach((letter) => {
      const letterElement = screen.getByText(letter)
      expect(letterElement).toHaveClass(
        'hover:bg-accent',
        'hover:text-primary',
        'transition-all',
        'duration-120',
        'ease-in',
        'cursor-pointer'
      )
    })
  })
})
