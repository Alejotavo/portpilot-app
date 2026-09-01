import { create } from 'zustand'

export type Role = 'admin' | 'user'

type User = {
  email: string
  role: Role
}

// Usuarios de prueba, hardcodeados. El día de mañana esto lo reemplaza una llamada al backend.
const USERS: (User & { password: string })[] = [
  { email: 'admin@portpilot.com', password: 'admin123', role: 'admin' },
  { email: 'user@portpilot.com', password: 'user123', role: 'user' },
]

type AuthState = {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: (email, password) => {
    const found = USERS.find((u) => u.email === email && u.password === password)
    if (!found) return false

    const user = { email: found.email, role: found.role }
    set({ user })
    return true
  },

  logout: () => set({ user: null }),
}))
