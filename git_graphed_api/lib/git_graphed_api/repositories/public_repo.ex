defmodule GitGraphedApi.Repositories.PublicRepo do
  use Ecto.Schema
  import Ecto.Changeset

  schema "public_repo" do
    field(:name, :string)
    field(:user_id, :id)

    timestamps()
  end

  @doc false
  def changeset(public_repo, attrs) do
    public_repo
    |> cast(attrs, [:name, :user])
    |> validate_required([:name, :user])
  end
end
