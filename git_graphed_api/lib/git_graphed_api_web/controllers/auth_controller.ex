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

  defp extracted_first_name(github_user) do
    full_name = github_user["name"]
    [first_name | _] = String.split(full_name, " ")
    first_name
  end

  defp extracted_last_name(github_user) do
    full_name = github_user["name"]
    [first_name | split_last_name] = String.split(full_name, " ")
    Enum.join(split_last_name, " ")
  end

  defp extracted_username(github_user) do
    github_user["login"] || ""
  end

  defp extracted_email(github_user) do
    github_user["email"] || ""
  end

  defp extracted_id(github_user) do
    case github_user["id"] do
      nil -> ""
      id -> Integer.to_string(id)
    end
  end

  defp extracted_token(auth) do
    auth.credentials.token || ""
  end

  defp extracted_github_user(auth) do
    auth.extra.raw_info.user || %{}
  end

  defp user_attrs(auth) do
    github_user = extracted_github_user(auth)

    %{
      first_name: extracted_first_name(github_user),
      last_name: extracted_last_name(github_user),
      username: extracted_username(github_user),
      email: extracted_email(github_user),
      github_id: extracted_id(github_user),
      token: extracted_token(auth),
      provider: "github"
    }
  end

  defp find_or_create_user_from_auth(auth) do
    IO.inspect(user_attrs(auth))
    user_attrs = user_attrs(auth)
    username = user_attrs[:username]

    user = Accounts.get_by_username(User, username)

    case user do
      nil ->
        {:ok, new_user} = Accounts.create_user(user_attrs)
        new_user

      user ->
        {:ok, updated_user} = Accounts.update_user(user, user_attrs)
        updated_user
    end
  end
end
