import { Link } from 'react-router-dom'

const Title = ({ text }: { text: string }) => {
  return (
    <Link to="/" className="text-3xl text-accent font-medium">
      {text}
    </Link>
  )
}

export default Title
