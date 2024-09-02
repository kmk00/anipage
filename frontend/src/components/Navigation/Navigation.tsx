import { Link } from 'react-router-dom'
import ListContainer from './ListContainer'
import Title from './Title'

const Navigation = () => {
  return (
    <div className=" text-black lg:w-2/5 py-2">
      <Title text="Anime studios" />

      <ListContainer />

      <button className="mt-2">
        <Link
          to="/rankings"
          className="text-xl bg-secondary hover:bg-accent transition-all duration-300 ease-in hover:text-primary rounded-lg px-6 py-1"
        >
          Rankings
        </Link>
      </button>
    </div>
  )
}

export default Navigation
