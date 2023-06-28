import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Invoice } from "./components/Invoice.tsx"

function getBorrowers() {
  return fetch('/api/v1/borrowers')
    .then(data => data.json())
}

function App() {
  const [borrowers, setBorrowers] = useState<Object[]>([])
  const [borrowerId, setBorrowerId] = useState<number>(0)

  const [invoices, setInvoices] = useState<Object[]>([])

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

  const fetchInvoices = useCallback((newBorrowerId: number) => {
    if (newBorrowerId == borrowerId) return

    setBorrowerId(newBorrowerId)

    fetch(`/api/v1/borrowers/${newBorrowerId}/invoices`)
      .then(data => data.json())
        .then(invoices => {
          console.log(invoices)
          setInvoices(invoices)
        })
  }, [borrowerId])

  return (
    <>
      <div className="wrapper">
        <h1>Borrowers</h1>
        <div style={{ textAlign: "center" }}>
          <ul style={{ cursor: "pointer", marginBottom: "0.5rem", textAlign: "left" }}>
            {
              borrowers.map(mapped => (
                <li
                  style={{ marginBottom: "1.5rem" }}
                  key={mapped.id}
                  onClick={() => fetchInvoices(mapped.id)}
                >{mapped.name}</li>
              ))
            }
          </ul>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }}>
          {
            invoices.map(mapped => (
              <Invoice
                key={mapped.id}
                invoiceNumber={mapped.invoice_number}
                amount={mapped.amount}
                dueDate={mapped.due_date}
                status={"Approved"}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
