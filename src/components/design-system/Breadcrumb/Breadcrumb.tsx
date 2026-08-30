type BreadcrumbProps = {
  crumbs: string[]
}

function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 flex-1 min-w-0 overflow-hidden whitespace-nowrap">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1
        return (
          <span key={crumb} className="flex items-center gap-2">
            {index > 0 && <span className="text-text-disabled">/</span>}
            <span
              className={
                isLast
                  ? 'text-body font-semibold text-text-primary truncate'
                  : 'text-label text-text-secondary'
              }
            >
              {crumb}
            </span>
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
