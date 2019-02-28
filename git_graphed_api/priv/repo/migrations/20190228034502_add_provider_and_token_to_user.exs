defmodule GitGraphedApi.Repo.Migrations.AddProviderAndTokenToUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add(:provider, :string)
      add(:token, :string)
    end
  end
end
