defmodule GitGraphedApiWeb.Schema do
  use Absinthe.Schema

  alias GitGraphedApiWeb.Resolvers

  # import Types
  import_types(GitGraphedApiWeb.Schema.Types.TypesLoader)

  # import Resolvers

  # query
  query do
    @desc "Get a list of all the users :)"
    field :users, list_of(:user_type) do
      # resolver
      resolve(&Resolvers.UserResolvers.User.users/3)
    end
  end

  # mutations
  mutation do
    @desc "Register a new user"
    field :register_user, type: :user_type do
      arg(:input, non_null(:user_input_type))
      resolve(&Resolvers.UserResolver.User.register_user/3)
    end
  end

  # subscriptions
  # subscription do
  # end
end
