defmodule GitGraphedApiWeb.AbsintheChannel do
  use GitGraphedApiWeb, :channel

  def join(channel_name, _params, socket) do
    {:ok, %{channel: channel_name}, socket}
  end

  def handle_in(_msg, %{"query" => query}, socket) do
    broadcast!(socket, _msg, %{"query" => query})
    {:noreply, socket}
  end
end
