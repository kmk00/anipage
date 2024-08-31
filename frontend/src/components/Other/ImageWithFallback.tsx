const ImageWithFallback = ({
  src,
  fallback,
  alt,
  className
}: {
  src: string
  fallback: string
  alt: string
  className?: string
}) => {
  const handleError = (event: any) => {
    event.target.src = fallback
  }

  return <img className={className} src={src} onError={handleError} alt={alt} />
}

export default ImageWithFallback
