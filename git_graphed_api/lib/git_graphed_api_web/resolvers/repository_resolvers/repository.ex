defmodule GitGraphedApiWeb.Resolvers.RepositoryResolvers.Repository do
  import Ecto.Query
  alias GitGraphedApi.Accounts.User
  alias GitGraphedApi.Repos
  alias GitGraphedApi.Repo

  @desc "Get Repositories for user"
  def repositories(%User{} = user, _args, _info) do
    query =
      from(r in Repos.Repository,
        where: r.user_id == ^user.id,
        select: r
      )

    {:ok, Repo.all(query)}
  end

  @desc "Repository Owner User"
  def user(%Repos.Repository{} = repo, _args, _info) do
    query =
      from(u in User,
        where: u.id == ^repo.user_id,
        select: u
      )

    {:ok, Repo.one(query)}
  end

  @desc "Repositories for a particular user"
  def user_repositories(_parent, %{id: user_id} = _args, _info) do
    query =
      from(repo in Repos.Repository,
        where: repo.user_id == ^user_id,
        select: repo
      )

    {:ok, Repo.all(query)}
  end
end
