import { useQuery } from '@tanstack/react-query'
import { getAnimeById } from 'api/anime'
import ErrorInfo from 'components/Other/ErrorInfo'
import Loading from 'components/Other/Loading'
import PageNotFound from 'components/Other/PageNotFound'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductionGenresList from './ProductionGenresList'
import ImageWithFallback from 'components/Other/ImageWithFallback'

const AnimeDetails = () => {
  const { animeId } = useParams()

  if (!animeId) return <PageNotFound />

  let navigate = useNavigate()

  const { isLoading, isError, error, data } = useQuery<Anime>({
    queryKey: ['anime', animeId],
    queryFn: () => getAnimeById(parseInt(animeId))
  })

  if (isError) {
    return (
      <div className="w-full flex justify-center items-center ">
        <ErrorInfo
          className="text-secondary w-1/2"
          text={error?.message || 'Anime not found'}
        />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center ">
        <Loading
          className="text-secondary w-1/2"
          text="Loading anime please wait..."
        />
      </div>
    )
  }

  if (!data) return <PageNotFound />

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <h2 className="text-2xl">{data?.English_name}</h2>
      <h3 className="text-lg italic">
        {data?.Name} / {data?.Other_name}
      </h3>

      <div className="flex flex-wrap mt-4 gap-2">
        <div className="basis-[300px] mx-auto">
          <ImageWithFallback
            src={data?.Image_URL}
            detail
            fallback="/src/assets/image-not-found.png"
            alt={data?.Name}
            nameEN={data?.English_name}
            name={data?.Name}
            className="mx-auto h-full rounded-md object-cover"
          />
          <div className="bg-primaryLight px-2 grid grid-cols-3 mt-4 rounded-md font-bold justify-around">
            <div className="flex p-1 flex-col justify-center text-center">
              <p className="text-md">{data?.Score || 'Unknown'}</p>
              <p className="text-[12px]">Score</p>
            </div>
            <div className="flex p-1 bg-primary flex-col justify-center text-center">
              <p className="text-md">{data?.Source || 'Unknown'}</p>
              <p className="text-[12px]">Source</p>
            </div>
            <div className="flex p-1 flex-col justify-center text-center">
              <p className="text-md ">{data?.Type || 'Unknown'}</p>
              <p className="text-[12px] ">Type</p>
            </div>
          </div>
          <ProductionGenresList genres={data?.Genres} />
        </div>
        <div className="basis-[400px] md:mt-0 space-y-4 grow">
          <h3 className="text-2xl font-bold">Synopsis</h3>
          <p className="ml-2 tracking-wide leading-7 font-semibold">
            {data?.Synopsis}
          </p>
          <h3 className="text-2xl font-bold">Details</h3>
          <div className="flex flex-col gap-y-2 font-semibold ml-2">
            <div className="flex gap-2 justify-between">
              <p>Episodes:</p>
              <p>{data?.Episodes ? Number(data.Episodes) : 'Unknown'}</p>
            </div>
            <div className="flex bg-primaryLight gap-2 justify-between">
              <p>Aired:</p>
              <p>{data?.Aired}</p>
            </div>
            <div className="flex gap-2 justify-between">
              <p>Status:</p>
              <p>{data?.Status}</p>
            </div>
            <div className="flex bg-primaryLight gap-2 justify-between">
              <p>Rating:</p>
              <p>{data?.Rating}</p>
            </div>
            <div className="flex gap-2 justify-between">
              <p>Studios:</p>
              <p>{data?.Studios}</p>
            </div>
          </div>
          <button
            className="bg-secondary text-primary rounded-md font-bold hover:bg-accent  transition-all duration-150 ease-in px-4 py-2 mt-4"
            onClick={() => navigate(-1)}
          >
            {`Go Back`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnimeDetails
