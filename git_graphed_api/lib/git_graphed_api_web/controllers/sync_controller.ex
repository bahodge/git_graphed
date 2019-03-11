defmodule GitGraphedApiWeb.SyncController do
  use GitGraphedApiWeb, :controller

  # alias GitGraphedApi.{Accounts, Accounts.User}

  def sync_public_repos(conn, _params) do
    IO.inspect(conn)
  end
end
