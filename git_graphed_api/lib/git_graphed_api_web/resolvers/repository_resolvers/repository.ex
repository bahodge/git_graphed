defmodule GitGraphedApiWeb.Resolvers.RepositoryResolvers.Repository do
  import Ecto.Query
  alias GitGraphedApi.Repos
  alias GitGraphedApi.{Accounts, Accounts.User}
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

  # @desc "Get all repositories"
  # def repositories(_parent, _args, _info) do
  #   {:ok, Repos.list_repositories()}
  # end
end
