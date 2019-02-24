use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :git_graphed_api, GitGraphedApiWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :git_graphed_api, GitGraphedApi.Repo,
  username: "postgres",
  password: "postgres",
  database: "git_graphed_api_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
