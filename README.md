# Xen Platforms Interview Challenge

## Install Dependencies

- SQLite3
    - Follow the [installation instructions for your platform](https://www.servermania.com/kb/articles/install-sqlite).

- OPTIONAL: Install the `asdf` runtime version manager: [https://asdf-vm.com/](https://asdf-vm.com/).
    - Install the Ruby asdf plugin: [https://github.com/asdf-vm/asdf-ruby](https://github.com/asdf-vm/asdf-ruby)
    - Install the NodeJS asdf plugin: [https://github.com/asdf-vm/asdf-nodejs](https://github.com/asdf-vm/asdf-nodejs)

- Node: Manually install version listed in `.tool-versions` or install using `asdf`: `asdf install`
    - Run `npm install` to install dependencies.

- Ruby: Manually install version listed in `.tool-versions` or install using `asdf`: `asdf install`
    - Run `bundle` to install dependencies.
    - Run `bundle exec rails db:setup` to set up the database.

## Start the Application

1. In your terminal, enter the project's root directory.
1. Start the backend: `./backend/bin/rails server`
1. Start the frontend: `cd ./frontend/ && npm run dev`
1. Visit the indicated frontend URL.

## Run Tests

### Backend

1. In your terminal, enter the project's root directory.
1. Run: `cd ./backend && bundle exec rake test`

### Frontend

1. In your terminal, enter the project's root directory.
1. Run: `cd ./frontend && npm run test`
