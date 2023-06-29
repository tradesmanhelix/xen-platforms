class Invoice < ApplicationRecord
  include InvoiceStateTransitionable

  validates :invoice_number, presence: true
  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :due_date, presence: true

  belongs_to :borrower
end
