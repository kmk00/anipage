const ImageWithFallback = ({
  src,
  fallback,
  alt,
  className,
  name,
  nameEN,
  detail
}: {
  src: string
  fallback: string
  alt: string
  detail?: boolean
  name?: string
  nameEN?: string
  className?: string
}) => {
  const handleError = (event: any) => {
    event.target.src = fallback
  }

  return (
    <div
      className={`relative  ${
        detail
          ? 'w-5/6 mx-auto'
          : 'h-full group hover:shadow-secondary/20 hover:scale-[1.01] transition-all duration-50 ease-in-out'
      } shadow-lg `}
    >
      <img className={className} src={src} onError={handleError} alt={alt} />
      {!detail && (
        <div className="absolute top-0 left-0 h-full w-full bg-primary/75 hidden group-hover:block ">
          <div className="flex flex-col p-2 justify-end h-full">
            {nameEN && nameEN !== 'UNKNOWN' && (
              <p className="font-bold text-secondary">{nameEN}</p>
            )}
            {name && name !== 'UNKNOWN' && (
              <p className=" text-secondary">{name}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageWithFallback
