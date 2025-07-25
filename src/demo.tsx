
import { createRoot } from 'react-dom/client'
import { Button } from './components/Button'
import './styles/global.css'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">UI Kit React Demo</h1>
      <div className="space-y-4">
        <Button onClick={() => alert('Button clicked!')}>
          Default Button
        </Button>
        
        <Button className="bg-red-500 hover:bg-red-600">
          Red Button
        </Button>
        
        <Button className="bg-green-500 hover:bg-green-600">
          Green Button
        </Button>
      </div>
    </div>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}
