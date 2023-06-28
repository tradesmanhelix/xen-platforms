import styles from "../styles/Invoice.module.css"

type InvoiceProps = {
  invoiceNumber: string
  amount: number
  dueDate: string
  status?: string
}

export function Invoice({ invoiceNumber, amount, dueDate, status = "Approved" }: InvoiceProps) {
  return (
    <div className={` ${styles.invoice} `}>
      <p>Invoice #: {invoiceNumber}</p>
      <p>Amount: ${amount}</p>
      <p>Due Date: {dueDate}</p>
      <p>Status: {status}</p>
    </div>
  )
}
