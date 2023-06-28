import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function getInvoices() {
  return fetch('/api/v1/borrowers/1/invoices')
    .then(data => data.json())
}

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    let mounted = true
    getInvoices()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false
  }, [])

  return (
    <>
    <div className="wrapper">
    <h1>My Grocery List</h1>
    <ul>
    {list.map(item => <li key={item.id}>{item.amount}</li>)}
    </ul>
    </div>
    </>
  )
}

export default App
