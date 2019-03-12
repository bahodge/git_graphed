defmodule Github.Sync.PublicRepos do
  alias GitGraphedApi.Accounts

  # "https://api.github.com/repos/bahodge/git_graphed/stats/contributors"  <- this is the endpoint for stats :)

  # recompile; Github.Sync.PublicRepos.call(1)

  def call(user_id) do
    %{username: username, token: oauth_token} = get_user(user_id)

    url = requested_endpoint(username)
    make_request!(url, headers(oauth_token), options())
  end

  defp parse_body(response) do
    result =
      Poison.Parser.parse!(response.body)
      |> Enum.map(fn repo ->
        %{
          repo_id: repo["id"],
          repo_name: repo["name"],
          repo_private: repo["private"]
        }
      end)
  end

  defp make_request!(url, headers, options) do
    HTTPoison.start()
    response = HTTPoison.get!(url, headers, options)
    parse_body(response)
  end

  defp headers(token) do
    [Authorization: "Bearer #{token}", Accept: "Application/json; Charset=utf-8"]
  end

  defp options() do
    [ssl: [{:versions, [:"tlsv1.2"]}], recv_timeout: 500]
  end

  defp requested_endpoint(username) do
    "#{base_url()}" <> "#{username}/repos"
  end

  defp base_url() do
    "https://api.github.com/users/"
  end

  defp get_user(user_id) do
    Accounts.get_user!(user_id)
  end
end
