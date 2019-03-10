defmodule GitGraphedApiWeb.Context do
  @behaviour Plug

  import Plug.Conn
  import Plug.Conn.Cookies
  import Ecto.Query, only: [where: 2]

  alias GitGraphedApi.{Accounts, Accounts.User}

  def init(opts), do: opts

  def call(conn, _) do
    context = build_context(conn)

    Absinthe.Plug.put_options(conn, context: context)
  end

  @doc """
  Return the current user context based on the authorization header
  """
  def build_context(conn) do
    cookie = get_req_header(conn, "cookie")
    [pulled_cookie | _] = cookie
    decoded_cookie = decode(pulled_cookie)

    {:ok, user_id} =
      Phoenix.Token.verify(GitGraphedApiWeb.Endpoint, "FJkfVgxy", decoded_cookie["userId"],
        max_age: 86400
      )

    case Accounts.get_user(user_id) do
      user ->
        %{current_user: user}

      _ ->
        %{}
    end
  end
end
