# frozen_string_literal: true

module InvoiceStateTransitionable
  extend ActiveSupport::Concern

  included do
    include AASM

    aasm column: :state do
      state :created, initial: true
      state :approved
      state :rejected
      state :purchased
      state :closed

      event :approve do
        transitions from: :created, to: :approved
      end

      event :reject do
        transitions from: :created, to: :rejected
      end

      event :purchase do
        transitions from: :approved, to: :purchased
      end

      event :close do
        transitions from: :purchased, to: :closed
      end
    end
  end
end
