defmodule GitGraphedApi.Repo.Migrations.RemoveLinksTable do
  use Ecto.Migration

  def change do
    drop_if_exists(table(:links))
  end
end
