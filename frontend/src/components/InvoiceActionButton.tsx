import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

type InvoiceActionButtonProps = {
  invoiceId: number
  invoiceNumber: string
  invoiceState: string
}

function getCreatedStateButtons(invoiceId: number, invoiceNumber: string, setQuery: Function) {
  const approveArgs = { invAction: "approve", invNum: invoiceNumber, invId: invoiceId }
  const rejectArgs = { invAction: "reject", invNum: invoiceNumber, invId: invoiceId }

  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-primary"
        onClick={() => confirmAction(approveArgs) && setQuery(`/api/v1/invoices/${invoiceNumber}/approve`)}
      >Approve</button>
      <button
        className="btn btn-outline-danger"
        onClick={() => confirmAction(rejectArgs) && setQuery(`/api/v1/invoices/${invoiceNumber}/reject`)}
      >Reject</button>
    </div>
  )
}

function getApprovedStateButtons(invoiceId: number, invoiceNumber: string, setQuery: Function) {
  const funcArgs = { invAction: "purchase", invNum: invoiceNumber, invId: invoiceId }

  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-success"
        onClick={() => confirmAction(funcArgs) && setQuery(`/api/v1/invoices/${invoiceNumber}/purchase`)}
      >Purchase</button>
    </div>
  )
}

function getPurchasedStateButtons(invoiceId: number, invoiceNumber: string, setQuery: Function) {
  const funcArgs = { invAction: "close", invNum: invoiceNumber, invId: invoiceId }

  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-secondary"
        onClick={() => confirmAction(funcArgs) && setQuery(`/api/v1/invoices/${invoiceNumber}/purchase`)}
      >Close</button>
    </div>
  )
}

function confirmAction(action) {
  return confirm(`Are you sure you want to ${action.invAction} the invoice #${action.invNum}?`)
}

type ApiResponse = {
  hits: {
    title: string
    objectID: string
    url: string
  }[]
}

type State = {
  data?: ApiResponse
  isLoading: boolean
  error?: string
}

type Action =
  | { type: 'request' }
  | { type: 'success', results: ApiResponse }
  | { type: 'failure', error: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'request':
      return { isLoading: true }
    case 'success':
      return { isLoading: false, data: action.results }
    case 'failure':
      return { isLoading: false, error: action.error }
  }
}

export function InvoiceActionButton({ invoiceId, invoiceNumber, invoiceState }: InvoiceProps) {
  const [query, setQuery] = useState<string>("")
  const [{
    data,
    isLoading,
    error
  }, dispatch] = useReducer(reducer, { isLoading: false })

  useEffect(() => {
    if (query == "") return

    let ignore = false

    dispatch({ type: 'request' })

    const requestOptions = {
      method: 'PUT'
    };

    fetch(query, requestOptions).then(
      (results) => { if (!ignore) dispatch({ type: 'success', results: results.data }) },
      (error) => dispatch({ type: 'failure', error }),
    )

    return () => { ignore = true }
  }, [query])

  const buttonsForInvoiceState = useCallback((invoiceState: string) => {
    switch (invoiceState) {
      case "created":
        return getCreatedStateButtons(invoiceId, invoiceNumber, setQuery)
        break
      case "approved":
        return getApprovedStateButtons(invoiceId, invoiceNumber, setQuery)
        break
      case "purchased":
        return getPurchasedStateButtons(invoiceId, invoiceNumber, setQuery)
        break
      case "rejected":
      case "closed":
        break
      default:
        console.log(`Invalid state: ${invoiceState}`)
    }
  }, [])

  return (
    <>
      {buttonsForInvoiceState(invoiceState)}
    </>
  )
}
