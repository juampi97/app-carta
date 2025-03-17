import './App.css'

import { useAppSelector } from './hooks/store'

function App() {

  const users = useAppSelector( state => state.users )
  
  return (
    <>

    </>
  )
}

export default App
