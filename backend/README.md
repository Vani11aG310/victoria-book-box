# Backend README

## Setup

1. `cd backend`
2. Run `bundle install` to install dependencies
3. Update `config.database.yml` with the database, username, and password
4. Run `bin/rails db:reset` to create, load and seed the database
5. Run `bin/rails server` to start the server


## Dependencies

- ruby 3.x
- rails 7.x
- pg 10x
- rack-cors
- faraday