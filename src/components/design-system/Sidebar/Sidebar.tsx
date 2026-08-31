import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DashboardIcon, TrendUpIcon, BellIcon } from '../Icons'
import { ROUTES } from '../../../routes/routes'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center h-8 px-2 rounded-md text-label text-text-primary hover:bg-maintenance-bg dark:hover:bg-surface-raised cursor-pointer ${
    isActive ? 'bg-maintenance-bg dark:bg-surface-raised' : ''
  }`
const dashboardRoute = ROUTES.find((route) => route.section === 'dashboard')
const monitoreoTabs = ROUTES.filter((route) => route.section === 'monitoreo')
const alarmasTabs = ROUTES.filter((route) => route.section === 'alarmas')

function Sidebar() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  function toggle(section: string) {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <div className="sticky top-14 flex flex-none h-[calc(100vh-3.5rem)]">
      <aside className="w-12 flex-none flex flex-col bg-bg-subtle border-r border-border">
        <nav className="flex flex-col gap-0.5 p-1.5">
          <NavLink
            to={dashboardRoute?.path ?? '/'}
            end
            onClick={() => setOpenSection(null)}
            className={({ isActive }) =>
              `relative flex items-center justify-center h-9 rounded-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
                isActive
                  ? 'bg-surface text-focus-ring dark:bg-maintenance-bg dark:text-maintenance-text'
                  : 'text-text-secondary hover:bg-border hover:text-text-primary dark:hover:bg-surface-raised'
              }`
            }
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <span className="absolute -left-1.5 top-1.5 bottom-1.5 w-0.75 rounded-r-sm bg-focus-ring" />
                  <DashboardIcon />
                </>
              ) : (
                <DashboardIcon />
              )
            }
          </NavLink>
          <button
            type="button"
            onClick={() => toggle('monitoreo')}
            aria-expanded={openSection === 'monitoreo'}
            className={`relative flex items-center justify-center h-9 rounded-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
              openSection === 'monitoreo'
                ? 'bg-surface text-focus-ring dark:bg-maintenance-bg dark:text-maintenance-text'
                : 'text-text-secondary hover:bg-border hover:text-text-primary dark:hover:bg-surface-raised'
            }`}
          >
            {openSection === 'monitoreo' && (
              <span className="absolute -left-1.5 top-1.5 bottom-1.5 w-0.75 rounded-r-sm bg-focus-ring" />
            )}
            <TrendUpIcon />
          </button>
          <button
            type="button"
            onClick={() => toggle('alarmas')}
            aria-expanded={openSection === 'alarmas'}
            className={`relative flex items-center justify-center h-9 rounded-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
              openSection === 'alarmas'
                ? 'bg-surface text-focus-ring dark:bg-maintenance-bg dark:text-maintenance-text'
                : 'text-text-secondary hover:bg-border hover:text-text-primary dark:hover:bg-surface-raised'
            }`}
          >
            {openSection === 'alarmas' && (
              <span className="absolute -left-1.5 top-1.5 bottom-1.5 w-0.75 rounded-r-sm bg-focus-ring" />
            )}
            <BellIcon />
          </button>
        </nav>
      </aside>

      <section
        className={`flex-none flex flex-col bg-surface border-r border-border overflow-hidden transition-[width] duration-200 ${
          openSection ? 'w-60' : 'w-0'
        }`}
      >
        <div className="w-60 flex flex-col flex-1">
          {openSection === 'monitoreo' && (
            <>
              <header className="flex items-center gap-2 h-9 px-3 flex-none bg-bg-subtle border-b border-border">
                <span className="flex-1 text-body font-semibold text-text-primary">Monitoreo</span>
                <span className="text-value-xs font-mono text-text-disabled">3</span>
              </header>
              <ul className="flex flex-col gap-0.5 p-2">
                {monitoreoTabs.map((route) => (
                  <li key={route.path}>
                    <NavLink to={route.path} className={navLinkClass}>
                      {route.navLabel}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )}
          {openSection === 'alarmas' && (
            <>
              <header className="flex items-center gap-2 h-9 px-3 flex-none bg-bg-subtle border-b border-border">
                <span className="flex-1 text-body font-semibold text-text-primary">Alarmas</span>
                <span className="text-value-xs font-mono text-text-disabled">2</span>
              </header>
              <ul className="flex flex-col gap-0.5 p-2">
                {alarmasTabs.map((route) => (
                  <li key={route.path}>
                    <NavLink to={route.path} className={navLinkClass}>
                      {route.navLabel}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Sidebar
