defmodule GitGraphedApiWeb.Router do
  use GitGraphedApiWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", GitGraphedApiWeb do
    pipe_through(:api)
  end
end
