import Studio from './Studio'

type StudioListProps = {
  studioList: StudioList
  search: string
}

const StudioList = ({ studioList, search }: StudioListProps) => {
  const filteredStudios = Object.keys(studioList).reduce((acc, letter) => {
    const studios = studioList[letter].filter((studio) =>
      studio.toLowerCase().includes(search.toLowerCase())
    )
    if (studios.length > 0) {
      acc[letter] = studios
    }
    return acc
  }, {} as StudioList)

  if (search.trim() === '') {
    return (
      <div className=" max-h-[70vh] overflow-y-auto">
        {Object.keys(studioList).map((letter) => (
          <Studio key={letter} letter={letter} studios={studioList[letter]} />
        ))}
      </div>
    )
  }

  return (
    <div className=" max-h-[70vh] overflow-y-auto">
      {Object.keys(filteredStudios).map((letter) => (
        <Studio
          key={letter}
          letter={letter}
          studios={filteredStudios[letter]}
        />
      ))}
    </div>
  )
}

export default StudioList
