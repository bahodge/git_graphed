defmodule GitGraphedApiWeb.AuthController do
  use GitGraphedApiWeb, :controller
  plug(Ueberauth)

  alias Ueberauth.Strategy.Helpers

  alias GitGraphedApi.Accounts.User

  def request(conn, _params) do
    render(conn, "request.html", callback_url: Helpers.callback_url(conn))
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "You have been logged out!")
    |> configure_session(drop: true)
    |> redirect(external: "http://localhost:3000")
  end

  def callback(%{assigns: %{ueberauth_failure: _fails}} = conn, _params) do
    conn
    |> put_flash(:error, "Failed to authenticate.")
    |> redirect(external: "http://localhost:3000")
  end

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, _params) do
    case UserFromAuth.find_or_create(auth) do
      {:ok, user} ->
        conn
        |> redirect(external: "http://localhost:3000")

      {:error, _reason} ->
        conn
        |> redirect(external: "http://localhost:3000/")
    end
  end
end
