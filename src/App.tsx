import './App.css'
import Topbar from './components/design-system/Topbar/Topbar'
import Sidebar from './components/design-system/Sidebar/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-bg-base font-sans">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
