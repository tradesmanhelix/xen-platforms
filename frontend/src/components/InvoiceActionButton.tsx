import { useCallback } from 'react'

type InvoiceActionButtonProps = {
  invoiceState: string
}

function getCreatedStateButtons() {
  return (
    <>
      <button>Approve</button>
      <button>Reject</button>
    </>
  )
}

function getApprovedStateButtons() {
  return (
    <>
      <button>Purchase</button>
    </>
  )
}

function getPurchasedStateButtons() {
  return (
    <>
      <button>Close</button>
    </>
  )
}

export function InvoiceActionButton({ invoiceState }: InvoiceProps) {

  const buttonsForInvoiceState = useCallback((invoiceState: string) => {
    switch (invoiceState) {
      case "created":
        return getCreatedStateButtons()
        break
      case "approved":
        return getApprovedStateButtons()
        break
      case "purchased":
        return getPurchasedStateButtons()
        break
      case "rejected":
      case "closed":
        break
      default:
        console.log(`Invalid state: ${invoiceState}`)
    }
  }, [invoiceState])

  return (
    <>
      {buttonsForInvoiceState(invoiceState)}
    </>
  )
}
