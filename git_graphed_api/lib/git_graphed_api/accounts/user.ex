defmodule GitGraphedApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field(:first_name, :string)
    field(:last_name, :string)
    field(:email, :string, unique: true)
    field(:username, :string)

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :email, :username])
    |> validate_required([:first_name, :last_name, :email, :username])
    |> validate_format(:email, ~r/@/)
    |> update_change(:email, &String.downcase(&1))
  end
end
