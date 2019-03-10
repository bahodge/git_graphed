defmodule GitGraphedApiWeb.AbsintheChannel do
  use GitGraphedApiWeb, :channel

  def join(channel_name, _payload, socket) do
    {:ok, socket}
  end

  def handle_in(_msg, %{"query" => query, "variables" => variables} = params, socket) do
    IO.inspect(params)

    response =
      query
      |> Absinthe.run(GitGraphedApiWeb.Schema,
        variables: variables,
        context: %{current_user: %{id: "1"}}
      )

    {:reply, response, socket}
  end

  # def authorized?(%{"token" => token} = payload) do
  #   case Phoenix.Token.verify(GitGraphedApiWeb.Enpoint, "FJkfVgxy", token) do
  #     {:ok, _} ->
  #       true

  #     {:error, _reason} ->
  #       false
  #   end
  # end
end
