defmodule GitGraphedApiWeb.Router do
  use GitGraphedApiWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
    plug(GitGraphedApiWeb.Context)
  end

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
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
      )
    end
  end

  pipeline :auth do
    plug(Ueberauth)
  end

  scope "/auth", GitGraphedApiWeb do
    pipe_through([:browser, :auth])

    get("/signout", AuthController, :signout)
    get("/:provider", AuthController, :request)
    get("/:provider/callback", AuthController, :callback)
  end
end
