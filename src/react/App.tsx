import Sidebar from './Sidebar'
import VaultPanel from './VaultPanel'

export default function App() {
  return (
    <main className="flex h-screen w-screen gap-1">
      <Sidebar />
      <VaultPanel />
    </main>
  )
}
