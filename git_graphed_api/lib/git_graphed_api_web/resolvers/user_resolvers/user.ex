defmodule GitGraphedApiWeb.Resolvers.UserResolvers.User do
  import Ecto.Query
  alias GitGraphedApi.Accounts
  alias GitGraphedApi.Repos.Repository
  alias GitGraphedApi.Repo

  # @desc "Get all users"
  def users(_parent, _args, _info) do
    # %{context: %{current_user: current_user}} = info
    {:ok, Accounts.list_users()}
  end

  # @desc "Get one user"
  def user(_parent, %{id: id} = _args, _info) do
    # %{context: %{current_user: current_user}} = info

    case Accounts.get_user!(id) do
      nil ->
        {:error, "User ID #{id} not found"}

      user ->
        {:ok, user}
    end
  end

  def register_user(_, %{input: input}, _) do
    Accounts.create_user(input)
  end
end
