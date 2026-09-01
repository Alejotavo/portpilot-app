import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MoonIcon, SunIcon, ChevronDownIcon, LogoutIcon } from '../Icons'
import { ROUTES } from '../../../routes/routes'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { useAuthStore } from '../../../store/authStore'

function Topbar() {
  const [dark, setDark] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const crumbs = ROUTES.find((route) => route.path === pathname)?.crumbs ?? ['Terminal DPWC']

  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  function toggleTheme(next: boolean) {
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-10 h-14 flex items-center gap-5 px-4 bg-surface dark:bg-bg-subtle border-b border-border shadow-elev-1 dark:shadow-none">
      <div className="flex items-center gap-2 flex-none">
        <span className="flex items-center justify-center w-7 h-7 rounded-md bg-focus-ring font-mono text-sm font-semibold text-btn-primary-text">P</span>
        <span className="text-h3 text-text-primary">PortPilot</span>
      </div>

      <div className="w-px h-6 bg-border flex-none" />

      <Breadcrumb crumbs={crumbs} />

      <div className="flex items-center h-7 p-0.5 rounded-md border border-border-strong bg-bg-subtle dark:bg-surface flex-none">
        <button
          type="button"
          onClick={() => toggleTheme(true)}
          aria-label="Tema oscuro"
          className={`flex items-center justify-center w-8 h-[22px] rounded-sm cursor-pointer ${dark ? 'bg-focus-ring text-btn-primary-text' : 'text-text-secondary'}`}
        >
          <MoonIcon />
        </button>
        <button
          type="button"
          onClick={() => toggleTheme(false)}
          aria-label="Tema claro"
          className={`flex items-center justify-center w-8 h-[22px] rounded-sm cursor-pointer ${!dark ? 'bg-focus-ring text-btn-primary-text' : 'text-text-secondary'}`}
        >
          <SunIcon />
        </button>
      </div>

      <div className="flex-none">
        <button
          type="button"
          popoverTarget="user-menu"
          popoverTargetAction="toggle"
          className="flex items-center gap-2 h-8 pl-1 pr-2 rounded-md border border-border-strong bg-surface cursor-pointer"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-bg-subtle dark:bg-border font-mono text-[11px] font-semibold text-text-primary">
            MR
          </span>
          <span className="text-label text-text-primary">{user?.email}</span>
          <ChevronDownIcon className="text-text-secondary" />
        </button>
        
        <div
          id="user-menu"
          popover="auto"
          className="fixed inset-auto top-16 right-4 m-0 w-[230px] rounded-md border border-offline-border dark:border-border-strong bg-surface-raised shadow-elev-3 p-1.5"
        >
          <span className="absolute -top-1 right-4 w-2 h-2 rotate-45 bg-surface-raised border-l border-t border-offline-border dark:border-border-strong" />

          <div className="px-2 pt-1 pb-2 text-caption text-text-secondary">
            {user?.role === 'admin' ? 'Administrador' : 'Usuario'}
          </div>
          <div className="h-px bg-border my-1" />
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2.5 w-full h-8 px-2 rounded-sm text-label text-critical-text hover:bg-bg-subtle dark:hover:bg-border cursor-pointer"
          >
            <LogoutIcon />
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar
