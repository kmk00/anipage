import StudioList from './StudioList'
import SearchComponent from './SearchComponent'
import { useQuery } from '@tanstack/react-query'
import { getStudioList } from 'api/studios'
import Loading from 'components/Other/Loading'
import ErrorInfo from 'components/Other/ErrorInfo'
import { useState } from 'react'
import LetterSelect from './LetterSelect'

const ListContainer = () => {
  const query = useQuery({ queryKey: ['studios'], queryFn: getStudioList })
  const [search, setSearch] = useState<string>('')

  // Rendering statements

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
      <SearchComponent className="w-5/6 mx-auto" setSearch={setSearch} />
      <StudioList studioList={query.data} search={search} />
    </div>
  )
}

export default ListContainer
