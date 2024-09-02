import ListContainer from './ListContainer'
import Title from './Title'

const Navigation = () => {
  return (
    <div className=" text-black lg:w-1/4 pt-4 px-2">
      <Title text="Anime studios" />

      <ListContainer />
    </div>
  )
}

export default Navigation
