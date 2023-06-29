import styles from "../styles/Invoice.module.css"

import { InvoiceActionButton } from "./InvoiceActionButton.tsx"

type InvoiceProps = {
  invoiceNumber: string
  amount: number
  dueDate: string
  invoiceState: string
}

export function Invoice({ invoiceNumber, amount, dueDate, invoiceState }: InvoiceProps) {
  return (
    <div className={` ${styles.invoice} `}>
      <p>Invoice #: {invoiceNumber}</p>
      <p>Amount: ${amount}</p>
      <p>Due Date: {dueDate}</p>
      <p>Status: {invoiceState}</p>
      <InvoiceActionButton invoiceState={invoiceState} />
    </div>
  )
}
