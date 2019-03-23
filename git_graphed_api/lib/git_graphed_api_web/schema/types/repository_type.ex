defmodule GitGraphedApiWeb.Schema.Types.RepositoryType do
  use Absinthe.Schema.Notation
  alias GitGraphedApiWeb.Resolvers

  object :repository_type do
    field(:id, :id)
    field(:repo_name, :string)
    field(:repo_private, :boolean)
    field(:fullname, :string)
    field(:html_url, :string)
    field(:description, :string)
    field(:language, :string)
    field(:default_branch, :string)
    field(:stargazers_count, :integer)
    field(:watchers_count, :integer)
    field(:forks_count, :integer)
    field(:open_issues_count, :integer)
    field(:size, :integer)
    field(:forks, :integer)
    field(:open_issues, :integer)
    field(:watchers, :integer)
    field(:fork, :boolean)
    field(:has_issues, :boolean)
    field(:has_projects, :boolean)
    field(:has_downloads, :boolean)
    field(:has_wiki, :boolean)
    field(:has_pages, :boolean)
    field(:archived, :boolean)
    field(:repo_created_at, :datetime)
    field(:repo_updated_at, :datetime)
    field(:repo_pushed_at, :datetime)

    field(:user, :user_type) do
      resolve(&Resolvers.RepositoryResolvers.Repository.user/3)
    end
  end
end
