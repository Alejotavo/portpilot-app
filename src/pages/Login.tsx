import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const success = login(email, password)
    if (success) {
      navigate('/')
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base font-sans">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm bg-surface border border-border rounded-lg p-6"
      >
        <h1 className="text-h3 text-text-primary">Iniciar sesión</h1>

        {error && (
          <p className="text-label text-critical-text">Email o contraseña incorrectos</p>
        )}

        <label className="flex flex-col gap-1">
          <span className="text-label text-text-secondary">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          className="h-9 rounded-md bg-btn-primary-bg text-btn-primary-text text-label font-semibold cursor-pointer"
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login
