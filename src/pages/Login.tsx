import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = useAuthStore((state) => state.login)
  const status = useAuthStore((state) => state.status)
  const error = useAuthStore((state) => state.error)
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const success = await login(username, password)
    if (success) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base font-sans">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm bg-surface border border-border rounded-lg p-6"
      >
        <h1 className="text-h3 text-text-primary">Iniciar sesión</h1>

        {error && <p className="text-label text-critical-text">{error}</p>}

        <label className="flex flex-col gap-1">
          <span className="text-label text-text-secondary">Usuario</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-9 px-3 rounded-md border border-border-strong bg-bg-subtle text-body text-text-primary"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-label text-text-secondary">Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-9 px-3 rounded-md border border-border-strong bg-bg-subtle text-body text-text-primary"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="h-9 rounded-md bg-btn-primary-bg text-btn-primary-text text-label font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Ingresando…' : 'Ingresar'}
        </button>

        {import.meta.env.DEV && (
          <div className="text-caption text-text-secondary">
            <p className="font-semibold mb-1">Credenciales de prueba (DummyJSON)</p>
            <p className="font-mono">emilys / emilyspass (admin)</p>
            <p className="font-mono">averyp / averyppass (user)</p>
          </div>
        )}
      </form>
    </div>
  )
}

export default Login
