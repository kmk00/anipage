import StudioList from './StudioList'
import SearchComponent from './SearchComponent'
import { useQuery } from '@tanstack/react-query'
import { getStudioList } from 'api/studios'
import Loading from 'components/Other/Loading'
import ErrorInfo from 'components/Other/ErrorInfo'

const ListContainer = () => {
  const query = useQuery({ queryKey: ['studios'], queryFn: getStudioList })

  if (query.isLoading) {
    return (
      <Loading
        className="h-[70vh] text-secondary"
        text="Loading studios please wait..."
      />
    )
  }

  if (query.isError) {
    return (
      <ErrorInfo className="text-secondary" text="Failed to fetch studios" />
    )
  }

  return (
    <div className="text-secondary my-8 space-y-8">
      <SearchComponent className="w-5/6 mx-auto" />
      <StudioList studioList={query.data} />
    </div>
  )
}

export default ListContainer
