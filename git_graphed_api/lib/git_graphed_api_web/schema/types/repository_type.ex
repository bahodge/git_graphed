defmodule GitGraphedApiWeb.Schema.Types.RepositoryType do
  use Absinthe.Schema.Notation
  alias GitGraphedApiWeb.Resolvers

  object :repository_type do
    field(:id, :id)
    field(:repo_name, :string)
    field(:repo_private, :boolean)

    field(:user, :user_type) do
      resolve(&Resolvers.RepositoryResolvers.Repository.user/3)
    end
  end
end
