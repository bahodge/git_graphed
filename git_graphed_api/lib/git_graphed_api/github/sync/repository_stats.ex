defmodule Github.Sync.RepositoryStats do
  import Ecto.Query
  alias GitGraphedApi.{Repo, Accounts, Accounts.User}

  def call(user_id) do
    user = get_user_with_repos(user_id)

    url = requested_endpoint(user.username, "git_graphed")

    IO.puts(user.token)
    IO.puts(url)

    make_request!(url, headers(user.token), options())
    |> parse_body
  end

  defp make_request!(url, headers, options) do
    HTTPoison.start()
    HTTPoison.get!(url, headers, options)
  end

  defp parse_body(response) do
    parsed_body = Poison.Parser.parse!(response.body)
    IO.inspect(parsed_body)
  end

  defp headers(token) do
    [Authorization: "Bearer #{token}", Accept: "Application/json; Charset=utf-8"]
  end

  defp options() do
    [ssl: [{:versions, [:"tlsv1.2"]}], recv_timeout: 500]
  end

  defp requested_endpoint(username, repo_name) do
    "#{base_url()}" <> "/#{username}/#{repo_name}/stats/contributors"
  end

  defp base_url() do
    "https://api.github.com/repos"
  end

  def get_user_with_repos(user_id) do
    Accounts.get_user_with_repos(user_id)
  end
end
