import { useQuery } from '@tanstack/react-query'
import { getProductionsByStudio } from 'api/studios'
import { Link, useParams } from 'react-router-dom'

const MainContent = ({ text }: { text?: string }) => {
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

  const { studio } = useParams()

  const query = useQuery({
    queryKey: ['productions', studio],
    queryFn: () => getProductionsByStudio(studio as string)
  })

  return (
    <div className="w-full">
      <h2 className="text-xl p-4">
        Anime made by studio <span className="text-accent">{studio}</span>
      </h2>

      <div className="p-8 grid grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] gap-4">
        {query.data &&
          query.data.map((item: Production, index: number) => (
            <Link key={index} to={`/anime/${item.Name}`}>
              <img
                src={item.Image_URL}
                alt="studio"
                className="mx-auto h-full rounded-md object-cover shadow-lg  hover:shadow-secondary hover:scale-[1.01] transition-all duration-50 ease-in-out"
              />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default MainContent
