defmodule Github.Sync.Repositories do
  import Ecto.Query

  alias GitGraphedApi.{Accounts, Repos, Repos.Repository}

  # "https://api.github.com/repos/bahodge/git_graphed/stats/contributors"  <- this is the endpoint for stats :)

  # recompile; Github.Sync.Repositories.call(1)

  def call(user_id) do
    %{username: username, token: oauth_token} = get_user(user_id)

    url = requested_endpoint(username)

    make_request!(url, headers(oauth_token), options())
    |> parse_body
    |> Enum.each(fn repo ->
      update_or_create_repository(repo[:repo_id], user_id, repo)
    end)
  end

  defp make_request!(url, headers, options) do
    HTTPoison.start()
    HTTPoison.get!(url, headers, options)
  end

  defp parse_body(response) do
    parsed_body = Poison.Parser.parse!(response.body)

    Enum.map(parsed_body, fn repo ->
      %{
        repo_id: repo["id"],
        repo_name: repo["name"],
        repo_private: repo["private"],
        fullname: repo["full_name"],
        html_url: repo["html_url"],
        description: repo["description"],
        language: repo["language"],
        default_branch: repo["default_branch"],
        stargazers_count: repo["stargazers_count"],
        watchers_count: repo["watchers_count"],
        forks_count: repo["forks_count"],
        open_issues_count: repo["open_issues_count"],
        size: repo["size"],
        forks: repo["forks"],
        open_issues: repo["open_issues"],
        watchers: repo["watchers"],
        fork: repo["fork"],
        has_issues: repo["has_issues"],
        has_projects: repo["has_projects"],
        has_downloads: repo["has_downloads"],
        has_wiki: repo["has_wiki"],
        has_pages: repo["has_pages"],
        archived: repo["archived"],
        repo_created_at: repo["created_at"],
        repo_updated_at: repo["updated_at"],
        repo_pushed_at: repo["pushed_at"]
      }
    end)
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

  def find_repository_by_repo_id(repo_id) do
    query =
      from(r in Repository,
        where: r.repo_id == ^repo_id,
        select: r
      )

    GitGraphedApi.Repo.one(query)
  end

  def update_or_create_repository(repo_id, user_id, attrs \\ %{}) do
    case find_repository_by_repo_id(repo_id) do
      nil ->
        attributes = Map.put(attrs, :user_id, user_id)
        Repos.create_repository(attributes)

      repository ->
        attributes = Map.put(attrs, :user_id, user_id)
        Repos.update_repository(repository, attributes)
    end
  end
end
