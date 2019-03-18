defmodule GitGraphedApiWeb.Resolvers.UserResolvers.User do
  # import Ecto.Query
  alias GitGraphedApi.Accounts
  # alias GitGraphedApi.Repo

  def users(_parent, _args, _info) do
    {:ok, Accounts.list_users()}
  end

  def user(_parent, %{id: id} = _args, _info) do
    case Accounts.get_user!(id) do
      nil ->
        {:error, "User ID #{id} not found"}

      user ->
        {:ok, user}
    end
  end

  def sync_user_repositories(_, %{id: user_id} = _args, _info) do
    case Accounts.get_user(user_id) do
      nil ->
        {:error, "Can't Find user"}

      user ->
        Accounts.sync_user_repositories(user_id)
        {:ok, user}
    end
  end
end
