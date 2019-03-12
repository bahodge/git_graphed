defmodule GitGraphedApi.Repos.Repository do
  use Ecto.Schema
  import Ecto.Changeset

  schema "repositories" do
    field(:repo_id, :integer)
    field(:repo_name, :string)
    field(:repo_private, :boolean, default: false)
    field(:user_id, :id)

    timestamps()
  end

  @doc false
  def changeset(repository, attrs) do
    repository
    |> cast(attrs, [:repo_name, :repo_id, :repo_private, :user_id])
    |> validate_required([:repo_name, :repo_id, :repo_private])
  end
end
