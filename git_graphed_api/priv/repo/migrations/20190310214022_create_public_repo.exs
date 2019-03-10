defmodule GitGraphedApi.Repo.Migrations.CreatePublicRepo do
  use Ecto.Migration

  def change do
    create table(:public_repo) do
      add :name, :string
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:public_repo, [:user_id])
  end
end
