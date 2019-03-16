defmodule GitGraphedApi.Repo.Migrations.AddGithubIdToUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add(:github_id, :string)
    end
  end
end
