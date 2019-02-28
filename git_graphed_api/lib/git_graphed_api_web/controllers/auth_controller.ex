defmodule GitGraphedApiWeb.AuthController do
  use GitGraphedApiWeb, :controller
  plug(Ueberauth)

  alias GitGraphedApi.Accounts.User

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, params) do
    user_params = %{token: auth.credentials.token, email: auth.info.email, provider: "github"}

    changeset = User.changeset(%User{}, user_params)
    signin(conn, changeset)
  end

  def signout(conn, _params) do
    # conn
    # |> configure_session(drop: true)
    # |> redirect(to: "/")
  end

  defp signin(conn, changeset) do
    # case insert_or_update_user(changeset) do
    #   {:ok, user} ->
    #     conn
    #     |> put_flash(:info, "Welcome Back")
    #     |> put_session(:user_id, user.id)
    #     |> redirect(to: "/")

    #   {:error, _reason} ->
    #     conn
    #     |> put_flash(:error, "Error Signing In")
    # end
  end

  defp insert_or_update_user(changeset) do
    # case Repo.get_by(User, email: changeset.changes.email) do
    #   nil ->
    #     Repo.insert(changeset)

    #   user ->
    #     {:ok, user}
    # end
  end
end
