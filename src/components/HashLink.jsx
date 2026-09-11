import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function HashLink({ to, children, className, onClick }) {
  const navigate = useNavigate()
  const location = useLocation()

  const [path, hash] = to.split('#')
  const targetPath = path || '/'

  const handleClick = (e) => {
    e.preventDefault()
    onClick?.()

    const scrollToTarget = () => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    if (location.pathname === targetPath) {
      scrollToTarget()
    } else {
      navigate(to)
      setTimeout(scrollToTarget, 50)
    }
  }

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}