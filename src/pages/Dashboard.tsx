import { useAuthStore } from '../store/authStore'

function Dashboard() {
  const user = useAuthStore((state) => state.user)

  if (user?.role === 'admin') {
    return (
      <div>
        <h1 className="text-h2 text-text-primary">Panel de administrador</h1>
        <p className="text-body text-text-secondary">Acá van los controles y datos que solo el admin puede ver.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-h2 text-text-primary">Dashboard</h1>
      <p className="text-body text-text-secondary">Vista estándar de operador.</p>
    </div>
  )
}

export default Dashboard
