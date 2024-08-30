import { useParams } from 'react-router-dom'

const MainContent = () => {
  const { studio } = useParams()

  return (
    <div className="w-full">
      <h2 className="text-xl p-4">
        Anime made by studio <span className="text-accent">{studio}</span>
      </h2>
    </div>
  )
}

export default MainContent
