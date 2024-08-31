import { useQuery } from '@tanstack/react-query'
import { getProductionsByStudio } from 'api/studios'
import ErrorInfo from 'components/Other/ErrorInfo'
import Loading from 'components/Other/Loading'
import { Link, useParams } from 'react-router-dom'

const MainContent = ({ text }: { text?: string }) => {
  const { studio } = useParams()

  const query = useQuery({
    queryKey: ['productions', studio],
    queryFn: () => getProductionsByStudio(studio as string),
    enabled: !!studio
  })

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

    return (
      <img className={className} src={src} onError={handleError} alt={alt} />
    )
  }

  if (query.isError) {
    return (
      <div className="w-full flex justify-center items-center ">
        <ErrorInfo
          className="text-secondary w-1/2"
          text={query.error?.message || 'Something went wrong'}
        />
      </div>
    )
  }

  // Display when the studio is not selected
  if (text) {
    return (
      <div className="w-full lg:flex hidden flex-col justify-center items-center ">
        <h2 className="text-2xl p-4">{text}</h2>
        <img
          src="/src/assets/character-image.png"
          alt="character pointing toward the studio list"
          className="character-image w-1/2"
        />
      </div>
    )
  }

  return (
    <div className="w-full">
      <h2 className="text-xl p-4">
        Anime made by studio <span className="text-accent">{studio}</span>
      </h2>
      {query.isLoading && (
        <Loading className="h-[70vh]" text="Loading productions..." />
      )}
      <div className="p-8 grid grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] gap-4">
        {query.data && (
          <>
            {query.data.length > 0 &&
              query.data.map((item: Production, index: number) => (
                <Link key={index} to={`/anime/${item.Name}`}>
                  <ImageWithFallback
                    src={item.Image_URL}
                    fallback="/src/assets/image-not-found.png"
                    alt={item.Name}
                    className="mx-auto h-full rounded-md object-cover shadow-lg  hover:shadow-secondary hover:scale-[1.01] transition-all duration-50 ease-in-out"
                  />
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  )
}

export default MainContent
