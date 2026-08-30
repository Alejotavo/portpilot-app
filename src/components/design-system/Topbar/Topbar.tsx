import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MoonIcon, SunIcon, ChevronDownIcon } from '../Icons'
import { ROUTES } from '../../../routes/routes'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

function Topbar() {
  const [dark, setDark] = useState(false)
  const { pathname } = useLocation()
  const crumbs = ROUTES.find((route) => route.path === pathname)?.crumbs ?? ['Terminal DPWC']

  function toggleTheme(next: boolean) {
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
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

      <button
        type="button"
        className="flex items-center gap-2 h-8 pl-1 pr-2 rounded-md border border-border-strong bg-surface cursor-pointer flex-none"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-bg-subtle dark:bg-border font-mono text-[11px] font-semibold text-text-primary">
          MR
        </span>
        <span className="text-label text-text-primary">M. Ruiz</span>
        <ChevronDownIcon className="text-text-secondary" />
      </button>
    </header>
  )
}

export default Topbar
