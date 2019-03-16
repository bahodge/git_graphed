defmodule GitGraphedApiWeb.Schema do
  use Absinthe.Schema

  alias GitGraphedApiWeb.Resolvers.UserResolvers
  alias GitGraphedApiWeb.Resolvers.RepositoryResolvers

  # import Types
  import_types(Absinthe.Type.Custom)
  import_types(GitGraphedApiWeb.Schema.Types.TypesLoader)

  query do
    @desc "Get a list of all the users :)"
    field :all_users, list_of(:user_type) do
      resolve(&UserResolvers.User.all_users/3)
    end

    @desc "Get one user"
    field :user, :user_type do
      arg(:id, non_null(:id))
      resolve(&UserResolvers.User.user/3)
    end

    field :user_repositories, list_of(:repository_type) do
      arg(:id, non_null(:id))
      resolve(&RepositoryResolvers.Repository.user_repositories/3)
    end
  end

  # mutation do
  # end
end
