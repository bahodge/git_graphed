defmodule GitGraphedApiWeb.Schema.Types.RepositoryType do
  use Absinthe.Schema.Notation
  alias GitGraphedApi.Resolvers

  object :repository_type do
    field(:id, :id)
    field(:repo_name, :string)
    field(:repo_private, :boolean)

    field(:user, :user_type) do
      arg(:user_id, non_null(:id))
      resolve(&Resolvers.UserResolvers.User.user/3)
    end
  end
end
