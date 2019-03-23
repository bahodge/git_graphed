defmodule GitGraphedApi.Repos.Repository do
  use Ecto.Schema
  import Ecto.Changeset

  schema "repositories" do
    field(:repo_id, :integer)
    field(:repo_name, :string)
    field(:repo_private, :boolean, default: false)
    field(:user_id, :id)
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
    field(:repo_created_at, :utc_datetime)
    field(:repo_updated_at, :utc_datetime)
    field(:repo_pushed_at, :utc_datetime)

    timestamps()
  end

  @doc false
  def changeset(repository, attrs) do
    repository
    |> cast(attrs, [
      :repo_name,
      :repo_id,
      :repo_private,
      :user_id,
      :fullname,
      :html_url,
      :description,
      :language,
      :default_branch,
      :stargazers_count,
      :watchers_count,
      :forks_count,
      :open_issues_count,
      :size,
      :forks,
      :open_issues,
      :watchers,
      :fork,
      :has_issues,
      :has_projects,
      :has_downloads,
      :has_wiki,
      :has_pages,
      :archived,
      :repo_created_at,
      :repo_updated_at,
      :repo_pushed_at
    ])
    |> validate_required([:repo_name, :repo_id, :repo_private])
  end
end
