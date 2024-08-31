import { Link } from 'react-router-dom'
import ErrorInfo from './ErrorInfo'

const PageNotFound = ({ error }: { error?: string }) => {
  return (
    <div className="bg-primary text-secondary flex flex-col justify-center items-center h-screen">
      <ErrorInfo text={error || 'Page not found'} />
      <Link
        className="mt-4 underline underline-offset-4 text-xl transition-all duration-300 ease-in hover:text-accent "
        to="/"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default PageNotFound
