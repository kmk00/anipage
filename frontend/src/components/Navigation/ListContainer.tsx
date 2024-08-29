import StudioList from './StudioList'
import SearchComponent from './SearchComponent'
import { useQuery } from '@tanstack/react-query'
import { getStudioList } from 'api/studios'

const ListContainer = () => {
  const query = useQuery({ queryKey: ['studios'], queryFn: getStudioList })

  if (query.isLoading) {
    return <div>Loading...</div>
  }

  if (query.isError) {
    return <div>Error</div>
  }

  return (
    <div className="text-secondary my-8 space-y-8">
      <SearchComponent className="w-5/6 mx-auto" />
      <StudioList studioList={query.data} />
    </div>
  )
}

export default ListContainer
