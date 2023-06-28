
task :dev_seed => :environement do
  borrower_1 = Borrower.find_or_create_by(name: "Shawn Smith")


  borrower_2 = Borrower.find_or_create_by(name: "Jane Jones")
end
