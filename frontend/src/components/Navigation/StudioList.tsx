import LetterSelect from './LetterSelect'
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
      <div>
        <div className=" max-h-[70vh] overflow-y-auto scroll-smooth ">
          {Object.keys(studioList).map((letter) => (
            <Studio key={letter} letter={letter} studios={studioList[letter]} />
          ))}
        </div>
        <LetterSelect />
      </div>
    )
  }

  return (
    <div>
      <div className=" max-h-[70vh] overflow-y-auto scroll-smooth">
        {Object.keys(filteredStudios).map((letter) => (
          <Studio
            key={letter}
            letter={letter}
            studios={filteredStudios[letter]}
          />
        ))}
      </div>
      <LetterSelect />
    </div>
  )
}

export default StudioList
