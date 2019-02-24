defmodule GitGraphedApiWeb.Router do
  use GitGraphedApiWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api" do
    pipe_through(:api)

    # this is the graphql endpoint
    forward("/graphql", Absinthe.Plug, schema: GitGraphedApiWeb.Schema)

    if Mix.env() == :dev do
      forward("/graphiql", Absinthe.Plug.GraphiQL, schema: GitGraphedApiWeb.Schema)
    end
  end
end
