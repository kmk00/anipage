import { useQuery } from '@tanstack/react-query'
import { getAnimeById } from 'api/anime'
import ErrorInfo from 'components/Other/ErrorInfo'
import PageNotFound from 'components/Other/PageNotFound'
import { useParams } from 'react-router-dom'

const AnimeDetails = () => {
  const { animeId } = useParams()

  if (!animeId) return <PageNotFound />

  const query = useQuery({
    queryKey: ['anime', animeId],
    queryFn: () => getAnimeById(parseInt(animeId))
  })

  return (
    <div className="w-full">
      <h2 className="">{query.data?.Name}</h2>
    </div>
  )
}

export default AnimeDetails
