import { render, screen, fireEvent } from '@testing-library/react'
import ImageWithFallback from 'components/Other/ImageWithFallback'

describe('ImageWithFallback component', () => {
  const src = 'valid-image-url.jpg'
  const fallback = 'fallback-image-url.jpg'
  const altText = 'Test Image'
  const className = 'custom-class'
  const name = 'Sample Name'
  const nameEN = 'Sample Name EN'

  it('renders the image with the correct src', () => {
    render(<ImageWithFallback src={src} fallback={fallback} alt={altText} />)

    const imgElement = screen.getByAltText(altText)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', src)
  })

  it('uses the fallback image when the src image fails to load', () => {
    render(<ImageWithFallback src={src} fallback={fallback} alt={altText} />)

    const imgElement = screen.getByAltText(altText)
    fireEvent.error(imgElement) // Simulate image load error

    expect(imgElement).toHaveAttribute('src', fallback)
  })

  it('applies the correct classes when detail is true', () => {
    const { container } = render(
      <ImageWithFallback
        src={src}
        fallback={fallback}
        alt={altText}
        detail={true}
      />
    )

    const divElement = container.querySelector('div')
    expect(divElement).toHaveClass('relative', 'w-5/6', 'mx-auto', 'shadow-lg')
  })

  it('displays the name and nameEN when detail is false and names are provided', () => {
    render(
      <ImageWithFallback
        src={src}
        fallback={fallback}
        alt={altText}
        name={name}
        nameEN={nameEN}
        detail={false}
      />
    )

    const nameElement = screen.getByText(name)
    const nameENElement = screen.getByText(nameEN)

    expect(nameElement).toBeInTheDocument()
    expect(nameENElement).toBeInTheDocument()
  })

  it('does not display the overlay when detail is true', () => {
    render(
      <ImageWithFallback
        src={src}
        fallback={fallback}
        alt={altText}
        name={name}
        nameEN={nameEN}
        detail={true}
      />
    )

    const overlayElement = screen.queryByText(name)
    expect(overlayElement).toBeNull()
  })
})
