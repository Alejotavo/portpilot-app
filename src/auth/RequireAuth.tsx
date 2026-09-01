import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

function RequireAuth() {
  const user = useAuthStore((state) => state.user)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default RequireAuth
