import Studio from './Studio'

type StudioListProps = {
  studioList: StudioList
}

const StudioList = ({ studioList }: StudioListProps) => {
  return (
    <div className=" max-h-[70vh] overflow-y-auto">
      {Object.keys(studioList).map((letter) => (
        <Studio key={letter} letter={letter} studios={studioList[letter]} />
      ))}
    </div>
  )
}

export default StudioList
