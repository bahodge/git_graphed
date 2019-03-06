defmodule GitGraphedApiWeb.Router do
  use GitGraphedApiWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
    plug(GitGraphedApiWeb.Plugs.SetUser)
  end

  scope "/" do
    pipe_through(:api)

    # this is the graphql endpoint
    forward("/graphql", Absinthe.Plug,
      schema: GitGraphedApiWeb.Schema,
      socket: GitGraphedApiWeb.UserSocket
    )

    if Mix.env() == :dev do
      forward("/graphiql", Absinthe.Plug.GraphiQL,
        schema: GitGraphedApiWeb.Schema,
        socket: GitGraphedApiWeb.UserSocket

        # ,
        # context: %{pubsub: GitGraphedWeb.Endpoint}
      )
    end
  end

  scope "/auth", GitGraphedApiWeb do
    pipe_through(:browser)

    get("/signout", AuthController, :signout)
    # defined by ueberauth module
    get("/:provider", AuthController, :request)
    get("/:provider/callback", AuthController, :callback)
  end
end
