import React, { useState } from 'react'
import { TrendUpIcon, BellIcon } from '../Icons'

function Sidebar() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  function toggle(section: string) {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <div className="sticky top-14 flex flex-none h-[calc(100vh-3.5rem)]">
      <aside className="w-12 flex-none flex flex-col border-r border-gray-300">
        <button
          type="button"
          onClick={() => toggle('monitoreo')}
          aria-expanded={openSection === 'monitoreo'}
          className={`flex items-center justify-center w-full h-10 cursor-pointer ${openSection === 'monitoreo' ? 'bg-gray-100' : ''}`}
        >
          <TrendUpIcon />
        </button>
        <button
          type="button"
          onClick={() => toggle('alarmas')}
          aria-expanded={openSection === 'alarmas'}
          className={`flex items-center justify-center w-full h-10 cursor-pointer ${openSection === 'alarmas' ? 'bg-gray-100' : ''}`}
        >
          <BellIcon />
        </button>
      </aside>

      <section
        className={`flex-none overflow-hidden border-r border-gray-300 transition-[width] duration-200 ${
          openSection ? 'w-60' : 'w-0'
        }`}
      >
        <div className="w-60 p-3">
          {openSection === 'monitoreo' && (
            <>
              <div className="font-semibold mb-2">Monitoreo</div>
              <ul className="flex flex-col gap-1">
                <li>Tab RTG</li>
                <li>Tab STS</li>
                <li>Tab ITV / GPS</li>
              </ul>
            </>
          )}
          {openSection === 'alarmas' && (
            <>
              <div className="font-semibold mb-2">Alarmas</div>
              <ul className="flex flex-col gap-1">
                <li>Sin reconocer</li>
                <li>Historial</li>
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Sidebar
