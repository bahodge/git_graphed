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

### Secrets
  * create a `dev.secret.exs` file in `./config/`
    * The following lines of code should be copied into that file
    * PM Ben for the Deets -> This should be git-secret

  * `config :git_graphed_api, GitGraphedApiWeb.Endpoint,
      secret_key_base: "SECRET_KEY_BASE"`

  * `config :ueberauth, Ueberauth.Strategy.Github.OAuth,
      client_id: "CLIENT_ID",
      client_secret: "CLIENT_SECRET"`

  * `config :git_graphed_api, GitGraphedApi.Repo,
      username: "DB_USERNAME",
      password: "DB_PASSWORD",
      database: "git_graphed_api_dev",
      pool_size: 10`



### Run the server

  * start -> `mix phx.server`
    * Now you can visit [`localhost:4000/graphiql`](http://localhost:4000/graphiql)
  * open a console with data (rails console) -> `iex -S mix phx.server`


### Working with the api

  * The endpoints
    * GraphQL -> `http://localhost::4000/graphql`
      * This is the non visual endpoint to be used by the frontend
    * GraphiQL -> `http://localhost::4000/graphiql`
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