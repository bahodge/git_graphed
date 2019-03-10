defmodule GitGraphedApiWeb.AbsintheChannel do
  use GitGraphedApiWeb, :channel

  # plug(GitGraphedApiWeb.Context)

  def join(_channel_name, _payload, socket) do
    {:ok, socket}
  end

  def handle_in(_msg, %{"query" => query, "variables" => variables} = _params, socket) do
    response =
      query
      |> Absinthe.run(
        GitGraphedApiWeb.Schema,
        variables: variables,
        context: %{current_user: %{id: "1"}}
      )

    {:reply, response, socket}
  end
end
