# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :git_graphed_api,
  ecto_repos: [GitGraphedApi.Repo]

# Configures the endpoint
config :git_graphed_api, GitGraphedApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "RAmW0VG8uA6hSkasYMfBYtLGb6BOqywttuMC8awWM/guwpSiOINmTYb14uoigZsC",
  render_errors: [view: GitGraphedApiWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: GitGraphedApi.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :ueberauth, Ueberauth,
  providers: [
    github: {Ueberauth.Strategy.Github, [default_scope: "user,public_repo,"]}
  ]

config :ueberauth, Ueberauth.Strategy.Github.OAuth,
  client_id: "57804018158fdaee0624",
  client_secret: "ae34f724c432d9f082384a288c4b817e43aaa6e0"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
