defmodule GitGraphedApiWeb.Resolvers.RepositoryResolvers.Repository do
  import Ecto.Query
  alias GitGraphedApi.{Repos, Repos.Repository}
  alias GitGraphedApi.Repo

  @desc "Get Repositories for user"
  def user_repositories(_parent, %{user_id: user_id}, _info) do
    query =
      from(r in Repository,
        where: r.user_id == ^user_id,
        select: r
      )

    {:ok, Repo.all(query)}
  end

  @desc "Get all repositories"
  def repositories(_parent, _args, _info) do
    {:ok, Repos.list_repositories()}
  end
end
