defmodule GitGraphedApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Queryable
  import Ecto.Changeset

  alias GitGraphedApi.Repos.Repository

  schema "users" do
    field(:first_name, :string)
    field(:last_name, :string)
    field(:email, :string, unique: true)
    field(:username, :string)
    field(:provider, :string)
    field(:token, :string)
    field(:github_id, :string)
    has_many(:repositories, Repository)

    timestamps()
  end

  @doc false
  # User.changeset(%User{}, %{first_name: ....})
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :email, :username, :provider, :token, :github_id])
    |> validate_required([:provider, :token, :username])
    |> validate_format(:email, ~r/@/)
    |> update_change(:email, &String.downcase(&1))
    |> unique_constraint(:email)
  end
end
