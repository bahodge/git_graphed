defmodule GitGraphedApi.Repo.Migrations.CreateRepositories do
  use Ecto.Migration

  def change do
    create table(:repositories) do
      add(:repo_name, :string)
      add(:repo_id, :integer)
      add(:repo_private, :boolean, default: false, null: false)
      add(:user_id, references(:users, on_delete: :nothing))

      timestamps()
    end

    create(index(:repositories, [:user_id]))
  end
end
