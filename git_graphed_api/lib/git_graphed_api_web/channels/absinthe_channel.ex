defmodule GitGraphedApiWeb.AbsintheChannel do
  use GitGraphedApiWeb, :channel

  def join(channel_name, _params, socket) do
    # handle user authentication here
    {:ok, %{channel: channel_name}, socket}
  end

  # @spec handle_in(binary(), map(), Phoenix.Socket.t()) :: {:noreply, Phoenix.Socket.t()}
  def handle_in(_msg, %{"query" => query, "variables" => variables}, socket) do
    response =
      query
      |> Absinthe.run(GitGraphedApiWeb.Schema, variables: variables)

    # broadcast!(socket, _msg, %{"query" => query})
    {:reply, response, socket}
  end
end
