import SearchComponent from 'components/Navigation/SearchComponent'
import ImageWithFallback from 'components/Other/ImageWithFallback'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type AnimeProductionProps = {
  productions: Production[]
}

const AnimeProductions = ({ productions }: AnimeProductionProps) => {
  const [search, setSearch] = useState<string>('')

  const filteredProductions = productions.filter((production) => {
    if (production.Name.toLowerCase().includes(search.toLowerCase())) {
      return production
    } else if (
      production.English_name.toLowerCase().includes(search.toLowerCase())
    ) {
      return production
    }
  })

  return (
    <div>
      <SearchComponent className="w-5/6 mx-auto" setSearch={setSearch} />
      <div className="p-8 grid grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] gap-4">
        {filteredProductions.map((item: Production, index: number) => (
          <Link key={index} to={`/anime/${item.Name}`}>
            <ImageWithFallback
              src={item.Image_URL}
              fallback="/src/assets/image-not-found.png"
              alt={item.Name}
              nameEN={item.English_name}
              name={item.Name}
              className="mx-auto h-full rounded-md object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnimeProductions
