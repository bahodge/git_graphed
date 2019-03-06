defmodule GitGraphedApiWeb.Schema do
  use Absinthe.Schema

  alias GitGraphedApiWeb.Resolvers

  # import Types
  import_types(GitGraphedApiWeb.Schema.Types.TypesLoader)

  query do
    @desc "Get a list of all the users :)"
    field :users, list_of(:user_type) do
      resolve(&Resolvers.UserResolvers.User.users/3)
    end

    @desc "Get one user"
    field :user, :user_type do
      arg(:id, non_null(:id))
      resolve(&Resolvers.UserResolvers.User.user/3)
    end
  end

  mutation do
    @desc "Register a new user"
    field :register_user, type: :user_type do
      arg(:input, non_null(:user_create_input_type))
      resolve(&Resolvers.UserResolvers.User.register_user/3)
    end
  end
end
