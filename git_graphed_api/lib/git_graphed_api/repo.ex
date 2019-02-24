defmodule GitGraphedApi.Repo do
  use Ecto.Repo,
    otp_app: :git_graphed_api,
    adapter: Ecto.Adapters.Postgres
end
