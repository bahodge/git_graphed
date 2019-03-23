defmodule GitGraphedApi.Repo.Migrations.AddDetailsToRepositories do
  use Ecto.Migration

  def change do
    alter table(:repositories) do
      add(:fullname, :string)
      add(:html_url, :string)
      add(:description, :string)
      add(:language, :string)
      add(:default_branch, :string)
      add(:stargazers_count, :integer)
      add(:watchers_count, :integer)
      add(:forks_count, :integer)
      add(:open_issues_count, :integer)
      add(:size, :integer)
      add(:forks, :integer)
      add(:open_issues, :integer)
      add(:watchers, :integer)
      add(:fork, :boolean)
      add(:has_issues, :boolean)
      add(:has_projects, :boolean)
      add(:has_downloads, :boolean)
      add(:has_wiki, :boolean)
      add(:has_pages, :boolean)
      add(:archived, :boolean)
      add(:repo_created_at, :utc_datetime)
      add(:repo_updated_at, :utc_datetime)
      add(:repo_pushed_at, :utc_datetime)
    end
  end
end
