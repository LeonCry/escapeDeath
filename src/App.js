import './App.css'
import { useRoutes } from 'react-router-dom'
import { Suspense, React } from 'react'
import routes from './routeTable/routes'
import Loading from './components/Loading'
function App() {
  const allRoute = useRoutes(routes)
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>{allRoute}</Suspense>
    </div>
  )
}

export default App
