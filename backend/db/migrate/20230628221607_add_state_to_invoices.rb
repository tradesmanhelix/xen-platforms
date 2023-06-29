class AddStateToInvoices < ActiveRecord::Migration[7.0]
  def change
    add_column :invoices, :state, :string, default: "created"
  end
end
