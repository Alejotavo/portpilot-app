import React from 'react'

export function BellIcon({ className = '' }) {
  return (
    <svg width="15" height="15" className={className} style={{ stroke: 'currentColor', strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
      <path d="M4 6.5a3.7 3.7 0 0 1 7.4 0V10l1.3 1.6H2.7L4 10z" />
      <path d="M6.4 13h2.6" />
    </svg>
  )
}

export function MoonIcon({ className = '' }) {
  return (
    <svg width="13" height="13" className={className} style={{ stroke: 'currentColor', strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
      <path d="M9.5 7.8A4 4 0 0 1 5.2 3.5 4.4 4.4 0 1 0 9.5 7.8z" />
    </svg>
  )
}

export function SunIcon({ className = '' }) {
  return (
    <svg width="13" height="13" className={className} style={{ stroke: 'currentColor', strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round' }}>
      <circle cx="6.5" cy="6.5" r="2.6" />
      <path d="M6.5 1v1.4M6.5 10.6V12M1 6.5h1.4M10.6 6.5H12M2.9 2.9l1 1M9.1 9.1l1 1M10.1 2.9l-1 1M3.9 9.1l-1 1" />
    </svg>
  )
}

export function ChevronDownIcon({ className = '' }) {
  return (
    <svg width="12" height="12" className={className} style={{ stroke: 'currentColor', strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
      <path d="M3 4.8 6 7.8 9 4.8" />
    </svg>
  )
}

export function TrendUpIcon({ className = '' }) {
  return (
    <svg width="17" height="17" className={className} style={{ stroke: 'currentColor', strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
      <path d="M2 13.5 6 7l3 3 5-7.5" />
    </svg>
  )
}
