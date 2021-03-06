defmodule GitGraphedApi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def absinthe_subscriptions(name) do
    %{
      type: :supervisor,
      id: Absinthe.Subscription,
      start: {Absinthe.Subscription, :start_link, [name]}
    }
  end

  def start(_type, _args) do
    # List all child processes to be supervised
    children = [
      # Start the Ecto repository
      GitGraphedApi.Repo,
      # Start the endpoint when the application starts
      GitGraphedApiWeb.Endpoint,
      absinthe_subscriptions(GitGraphedApiWeb.Endpoint)

      # Starts a worker by calling: GitGraphedApi.Worker.start_link(arg)
      # {GitGraphedApi.Worker, arg},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: GitGraphedApi.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    GitGraphedApiWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
