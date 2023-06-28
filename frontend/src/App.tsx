import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function getBorrowers() {
  return fetch('/api/v1/borrowers')
    .then(data => data.json())
}

function App() {
  const [borrowers, setBorrowers] = useState([])
  const [borrowerId, setBorrowerId] = useState(0)

  useEffect(() => {
    let mounted = true
    getBorrowers()
      .then(borrowers => {
        if(mounted) {
          setBorrowers(borrowers)
        }
      })
    return () => mounted = false
  }, [])

  return (
    <>
      <div className="wrapper">
        <h1>Borrowers</h1>
        <ul style={{ cursor: "pointer", marginBottom: "0.5rem", textAlign: "left" }}>
          {
            borrowers.map(mapped => (
              <li
                style={{ marginBottom: "1.5rem" }}
                key={mapped.id}
                onClick={() => setBorrowerId(mapped.id)}
              >{mapped.name}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
