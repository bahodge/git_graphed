defmodule UserFromAuth do
  @moduledoc """
  Retrieve the user information from an auth request
  """
  require Logger
  require Poison

  alias Ueberauth.Auth
  alias GitGraphedApi.{Accounts, Accounts.User}

  def find_or_create(%Auth{provider: :identity} = auth) do
    IO.puts("++++++++++TOP+++++++++")
    IO.puts("++++++++++TOP+++++++++")
    IO.puts("++++++++++TOP+++++++++")
    IO.puts("++++++++++TOP+++++++++")
    IO.puts("++++++++++TOP+++++++++")

    IO.puts(auth)
    IO.puts("++++++++++TOP+++++++++")
    IO.puts("++++++++++TOP+++++++++")
    IO.puts("++++++++++TOP+++++++++")
    IO.puts("++++++++++TOP+++++++++")
    user = Accounts.get_by(User, token: auth.token)

    {:ok, user}
  end

  def find_or_create(%Auth{} = auth) do
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")
    IO.puts("++++++++++BOTTOM+++++++++")

    {:ok, basic_info(auth)}
  end

  defp basic_info(auth) do
    %{username: username_from_auth(auth)}
  end

  defp username_from_auth(auth) do
    if auth.info.username do
      auth.info.username
    end
  end
end
