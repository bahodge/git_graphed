defmodule GitGraphedApiWeb.Resolvers.UserResolvers.User do
  alias GitGraphedApi.Accounts

  @desc "Get all users"
  def users(_parent, _args, _resolution) do
    {:ok, Accounts.list_users()}
  end

  @desc "Get one user"
  def user(_parent, %{id: id}, _resolution) do
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
