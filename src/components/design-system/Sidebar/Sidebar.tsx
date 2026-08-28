import React from 'react'
function Sidebar() {
  return (
    <aside className="sticky top-14 z-10 h-[calc(100vh-3.5rem)] w-64 bg-surface border-r border-border shadow-elev-1">
      <div className="h-14 flex items-center gap-5 px-4">
        <span className="text-h3 text-text-primary">Sidebar</span>
      </div>
    </aside>
  )
}

export default Sidebar
