import StudioList from './StudioList'
import SearchComponent from './SearchComponent'

const ListContainer = () => {
  return (
    <div className="text-secondary my-8 space-y-8">
      <SearchComponent className="w-5/6 mx-auto" />
      <StudioList />
    </div>
  )
}

export default ListContainer
