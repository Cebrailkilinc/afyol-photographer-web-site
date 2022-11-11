import { useState } from 'react'
import Layout from './components/Layout';
import { DataProvider } from './context/DataContext';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black' >
      <DataProvider>
        <Layout />
      </DataProvider>
    </div>
  )
}

export default App
