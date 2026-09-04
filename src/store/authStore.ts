import { create } from 'zustand'

export type Role = 'admin' | 'user'

type User = {
  id: number
  username: string
  email: string
  role: Role
}

type LoginResponse = {
  accessToken: string
}

type MeResponse = {
  id: number
  username: string
  email: string
  role: string
}

const API_URL = 'https://dummyjson.com'

type AuthState = {
  user: User | null
  status: 'idle' | 'loading'
  error: string | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: 'idle',
  error: null,

  login: async (username, password) => {
    set({ status: 'loading', error: null })

    try {
      const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (!loginRes.ok) {
        set({ status: 'idle', error: 'Usuario o contraseña incorrectos' })
        return false
      }

      const { accessToken } = (await loginRes.json()) as LoginResponse

      const meRes = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      const me = (await meRes.json()) as MeResponse

      set({
        user: {
          id: me.id,
          username: me.username,
          email: me.email,
          role: me.role === 'admin' ? 'admin' : 'user',
        },
        status: 'idle',
      })
      return true
    } catch {
      set({ status: 'idle', error: 'No se pudo conectar con el servidor' })
      return false
    }
  },

  logout: () => set({ user: null }),
}))
