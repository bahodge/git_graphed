defmodule GitGraphedApiWeb.AbsintheChannel do
  use GitGraphedApiWeb, :channel

  def join(channel_name, _params, socket) do
    # handle user authentication here
    {:ok, %{channel: channel_name}, socket}
  end

  def handle_in(_msg, %{"query" => query, "variables" => variables}, socket) do
    response =
      query
      |> Absinthe.run(GitGraphedApiWeb.Schema,
        variables: variables,
        context: %{current_user: %{id: "1"}}
      )

    {:reply, response, socket}
  end
end
