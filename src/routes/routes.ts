export type RouteConfig = {
  path: string
  crumbs: string[]
  section?: 'dashboard' | 'monitoreo' | 'alarmas'
  navLabel?: string
}

export const ROUTES: RouteConfig[] = [
  { path: '/', 
    crumbs: ['Terminal DPWC', 'Dashboard'],
    section: 'dashboard',  
  },
  {
    path: '/monitoreo/rtg',
    crumbs: ['Terminal DPWC', 'Monitoreo', 'RTG'],
    section: 'monitoreo',
    navLabel: 'Tab RTG',
  },
  {
    path: '/monitoreo/sts',
    crumbs: ['Terminal DPWC', 'Monitoreo', 'STS'],
    section: 'monitoreo',
    navLabel: 'Tab STS',
  },
  {
    path: '/monitoreo/itv-gps',
    crumbs: ['Terminal DPWC', 'Monitoreo', 'ITV / GPS'],
    section: 'monitoreo',
    navLabel: 'Tab ITV / GPS',
  },
  { path: '/alarmas', crumbs: ['Terminal DPWC', 'Alarmas'] },
  {
    path: '/alarmas/sin-reconocer',
    crumbs: ['Terminal DPWC', 'Alarmas', 'Sin reconocer'],
    section: 'alarmas',
    navLabel: 'Sin reconocer',
  },
  {
    path: '/alarmas/historial',
    crumbs: ['Terminal DPWC', 'Alarmas', 'Historial'],
    section: 'alarmas',
    navLabel: 'Historial',
  },
]
