import { Link } from 'react-router-dom'
import { logo } from '../assets/images'
import Button from '../components/common/Button'
import DocumentTitle from '../components/common/DocumentTitle'

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center bg-paper px-6 py-32 text-center">
      <DocumentTitle title="Page Not Found" />
      <img src={logo} alt="Sansaar Infrastructure" className="h-20 w-auto" />
      <h1 className="mt-10 text-4xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-ink/75">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Button to="/" className="mt-8">
        Return Home
      </Button>
      <Link to="/contact" className="mt-4 text-sm uppercase tracking-[0.16em] text-mist">
        Contact
      </Link>
    </div>
  )
}
