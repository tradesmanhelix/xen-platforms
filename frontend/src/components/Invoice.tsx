import styles from "../styles/Invoice.module.css"

import { InvoiceActionButton } from "./InvoiceActionButton.tsx"

type InvoiceProps = {
  invoiceId: number
  invoiceNumber: string
  amount: number
  dueDate: string
  invoiceState: string
}

export function Invoice({ invoiceId, invoiceNumber, amount, dueDate, invoiceState }: InvoiceProps) {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="col-sm-6">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Invoice #{invoiceNumber}</h5>

          <div className="my-3">
            <p className="card-text">Amount: {USDollar.format(amount)}</p>
            <p className="card-text">Due Date: {dueDate}</p>
            <p className="card-text">Status: {invoiceState}</p>
          </div>

          <InvoiceActionButton invoiceId={invoiceId} invoiceNumber={invoiceNumber} invoiceState={invoiceState} />
        </div>
      </div>
    </div>
  )
}
