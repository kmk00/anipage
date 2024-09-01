import { useQuery } from '@tanstack/react-query'
import { getAnimeById } from 'api/anime'
import ErrorInfo from 'components/Other/ErrorInfo'
import Loading from 'components/Other/Loading'
import PageNotFound from 'components/Other/PageNotFound'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductionGenresList from './ProductionGenresList'

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
    <div className="w-full p-4">
      <h2 className="text-2xl">{data?.English_name}</h2>
      <h3 className="text-lg italic">
        {data?.Name} / {data?.Other_name}
      </h3>

      <div className="flex flex-wrap mt-4 gap-4">
        <div className="basis-[300px] mx-auto">
          <img
            src={data?.Image_URL}
            alt={data?.Name}
            className="w-full rounded-t-md object-cover"
          />
          <div className="bg-primaryLight px-2 flex rounded-b-md font-bold justify-around">
            <div className="flex p-1 flex-col justify-center text-center">
              <p className="text-2xl">{data?.Score}</p>
              <p className="text-sm">Score</p>
            </div>
            <div className="flex p-1 bg-primary flex-col justify-center text-center">
              <p className="text-2xl">{data?.Source}</p>
              <p className="text-sm">Source</p>
            </div>
            <div className="flex p-1 flex-col justify-center text-center">
              <p className="text-2xl">{data?.Type}</p>
              <p className="text-sm">Type</p>
            </div>
          </div>
          <div className="">
            <ProductionGenresList genres={data?.Genres} />
          </div>
        </div>
        <div className="basis-[400px] space-y-4 grow">
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
