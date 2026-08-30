import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Topbar from './components/design-system/Topbar/Topbar'
import Sidebar from './components/design-system/Sidebar/Sidebar'
import { ROUTES } from './routes/routes'

function Placeholder({ title }: { title: string }) {
  return <h1 className="text-h2 text-text-primary">{title}</h1>
}

function App() {
  return (
    <div className="min-h-screen bg-bg-base font-sans">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <section className="flex flex-col gap-4">
            <Routes>
              <Route path="/" element={<Navigate to="/monitoreo" replace />} />
              {ROUTES.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Placeholder title={route.crumbs[route.crumbs.length - 1]} />}
                />
              ))}
            </Routes>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
