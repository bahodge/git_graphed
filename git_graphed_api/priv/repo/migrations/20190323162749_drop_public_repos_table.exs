defmodule GitGraphedApi.Repo.Migrations.DropPublicReposTable do
  use Ecto.Migration

  def change do
    drop table(:public_repo)
  end
end
