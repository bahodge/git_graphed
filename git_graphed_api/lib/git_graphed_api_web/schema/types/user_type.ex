defmodule GitGraphedApiWeb.Schema.Types.UserType do
  use Absinthe.Schema.Notation
  alias GitGraphedApiWeb.Resolvers

  object :user_type do
    field(:id, :id)
    field(:first_name, :string)
    field(:last_name, :string)
    field(:email, :string)
    field(:username, :string)

    field(:user_repositories, list_of(:repository_type)) do
      arg(:user_id, :id)
      resolve(&Resolvers.RepositoryResolvers.Repository.user_repositories/3)
    end
  end

  input_object :user_create_input_type do
    field(:token, non_null(:string))
    field(:provider, non_null(:string))
    field(:email, non_null(:string))
    field(:username, non_null(:string))
  end
end
