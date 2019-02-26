# GitGraphedApi

## To Run
### Clone the Project
  * make a folder -> `cd 'some_folder'`
  * initialize repo -> `git init`
  * clone project -> `git clone git@github.com:bahodge/git_graphed.git`

### Set up requirements

  * Erlang: Erlang/OTP 21
  * Elixir: v1.8.0
  * Phoenix: v1.4.1

### Install Dependencies

  * install -> `mix deps.get`

### Set up database

  * using postgres
  * use / uncomment the example given in the `./git_graphed_api/config/dev.exs` file
  * you may have to update your username and password, but I reccomend you just create a new user
  * Setup Database -> `mix ecto.setup` OR
    * Create database -> `mix ecto.create`
    * Migrate database -> `mix ecto.migrate`


### Run the server

  * start -> `mix phx.server`
    * Now you can visit [`localhost:4000`](http://localhost:4000)
  * open a console with data (rails console) -> `iex -S mix phx.server`


### Working with the api

  * The endpoints
    * GraphQL -> `http://localhost::4000/api/graphql`
      * This is the non visual endpoint to be used by the frontend
    * GraphiQL -> `http://localhost::4000/api/graphiql`
      * Visual interface for testing queries and mutations
      * Only available when Mix.env == :dev
<!-- 
To start your Phoenix server:
  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server` -->

<!-- Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html). -->

### Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix



; prefix=C:\Program Files\nodejs