defmodule GitGraphedApi.Repositories do
  @moduledoc """
  The Repositories context.
  """

  import Ecto.Query, warn: false
  alias GitGraphedApi.Repo

  alias GitGraphedApi.Repositories.PublicRepo

  @doc """
  Returns the list of public_repo.

  ## Examples

      iex> list_public_repo()
      [%PublicRepo{}, ...]

  """
  def list_public_repos do
    Repo.all(PublicRepo)
  end

  @doc """
  Gets a single public_repo.

  Raises `Ecto.NoResultsError` if the Public repo does not exist.

  ## Examples

      iex> get_public_repo!(123)
      %PublicRepo{}

      iex> get_public_repo!(456)
      ** (Ecto.NoResultsError)

  """
  def get_public_repo!(id), do: Repo.get!(PublicRepo, id)

  @doc """
  Creates a public_repo.

  ## Examples

      iex> create_public_repo(%{field: value})
      {:ok, %PublicRepo{}}

      iex> create_public_repo(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_public_repo(attrs \\ %{}) do
    %PublicRepo{}
    |> PublicRepo.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a public_repo.

  ## Examples

      iex> update_public_repo(public_repo, %{field: new_value})
      {:ok, %PublicRepo{}}

      iex> update_public_repo(public_repo, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_public_repo(%PublicRepo{} = public_repo, attrs) do
    public_repo
    |> PublicRepo.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a PublicRepo.

  ## Examples

      iex> delete_public_repo(public_repo)
      {:ok, %PublicRepo{}}

      iex> delete_public_repo(public_repo)
      {:error, %Ecto.Changeset{}}

  """
  def delete_public_repo(%PublicRepo{} = public_repo) do
    Repo.delete(public_repo)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking public_repo changes.

  ## Examples

      iex> change_public_repo(public_repo)
      %Ecto.Changeset{source: %PublicRepo{}}

  """
  def change_public_repo(%PublicRepo{} = public_repo) do
    PublicRepo.changeset(public_repo, %{})
  end
end
