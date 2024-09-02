import { useQuery } from '@tanstack/react-query'
import { getProductionsByStudio } from 'api/studios'
import ErrorInfo from 'components/Other/ErrorInfo'
import ImageWithFallback from 'components/Other/ImageWithFallback'
import Loading from 'components/Other/Loading'
import { Link, useParams } from 'react-router-dom'
import AnimeProductions from './AnimeProductions'

const MainContent = ({ text }: { text?: string }) => {
  const { studio } = useParams()

  const query = useQuery({
    queryKey: ['productions', studio],
    queryFn: () => getProductionsByStudio(studio as string),
    enabled: !!studio
  })

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
      <h2 className="text-xl text-center md:text-left p-4">
        Anime made by studio <span className="text-accent">{studio}</span>
      </h2>

      {query.isLoading && (
        <Loading className="h-[70vh]" text="Loading productions..." />
      )}

      {query.data && <AnimeProductions productions={query.data} />}
    </div>
  )
}

export default MainContent
