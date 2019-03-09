defmodule GitGraphedApiWeb.AuthController do
  use GitGraphedApiWeb, :controller
  plug(Ueberauth)

  alias Ueberauth.Strategy.Helpers
  alias GitGraphedApi.{Accounts, Accounts.User}

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, _params) do
    user = find_or_create_user_from_auth(auth)
    token = Phoenix.Token.sign(GitGraphedApiWeb.Endpoint, "FJkfVgxy", user.token)

    conn
    |> put_session(:token, token)
    |> redirect(external: "http://localhost:3000")
  end

  def find_or_create_user_from_auth(auth) do
    github_user = auth.extra.raw_info.user
    login = github_user["login"]
    email = github_user["email"]
    token = auth.credentials.token

    case Accounts.get_by(User, login) do
      user ->
        Accounts.update_user(user, %{token: token, provider: "github"})
        user

      nil ->
        attrs = %{
          username: login,
          email: email,
          token: token,
          provider: "github"
        }

        Accounts.create_user(attrs)
    end
  end
end

# def request(conn, _params) do
#   render(conn, "request.html", callback_url: Helpers.callback_url(conn))
# end

# def delete(conn, _params) do
#   conn
#   |> put_flash(:info, "You have been logged out!")
#   |> configure_session(drop: true)
#   |> redirect(external: "http://localhost:3000")
# end

# def callback(%{assigns: %{ueberauth_failure: _fails}} = conn, _params) do
#   conn
#   |> put_flash(:error, "Failed to authenticate.")
#   |> redirect(external: "http://localhost:3000")
# end

# def callback(%{assigns: %{ueberauth_auth: auth}} = conn, _params) do
#   case UserFromAuth.find_or_create(auth) do
#     {:ok, user} ->
#       # give the user  a token
#       token = Phoenix.Token.sign(GitGraphedApiWeb.Endpoint, "FJkfVgxy", user.token)

#       conn
#       |> put_session(:token, token)
#       |> redirect(external: "http://localhost:3000")

#     {:error, _reason} ->
#       conn
#       |> redirect(external: "http://localhost:3000/")
#   end
# end
# end
