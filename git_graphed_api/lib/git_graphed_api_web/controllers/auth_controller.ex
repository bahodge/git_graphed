defmodule GitGraphedApiWeb.AuthController do
  use GitGraphedApiWeb, :controller
  plug(Ueberauth)

  alias Ueberauth.Strategy.Helpers
  alias GitGraphedApi.{Accounts, Accounts.User}

  def signout(conn, _params) do
    conn
    |> delete_resp_cookie("userId")
    |> redirect(external: "http://localhost:3000")
  end

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, _params) do
    user = find_or_create_user_from_auth(auth)
    encrypted_user_id = Phoenix.Token.sign(GitGraphedApiWeb.Endpoint, "FJkfVgxy", user.id)

    conn
    |> put_resp_cookie("userId", encrypted_user_id,
      max_age: 10 * 24 * 60 * 60,
      http_only: false
    )
    |> redirect(external: "http://localhost:3000/users")
  end

  defp find_or_create_user_from_auth(auth) do
    github_user = auth.extra.raw_info.user
    username = github_user["login"]
    email = github_user["email"]
    token = auth.credentials.token

    # emails are unique indexes, but users can have multiple email addresses, so i think that username is better
    case Accounts.get_by_username(User, username) do
      user ->
        Accounts.update_user(user, %{token: token, provider: "github"})
        user

      nil ->
        attrs = %{
          username: username,
          email: email,
          token: token,
          provider: "github"
        }

        Accounts.create_user(attrs)
    end
  end
end
