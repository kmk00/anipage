import { useParams } from 'react-router-dom'

const MainContent = ({ text }: { text?: string }) => {
  if (text) {
    return (
      <div className="w-full lg:flex hidden flex-col justify-center items-center ">
        <h2 className="text-2xl p-4">{text}</h2>
        <img
          src="/src/assets/character-image.png"
          alt="character pointing toward the studio list"
          className="character-image w-1/2 mr-auto"
        />
      </div>
    )
  }

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
