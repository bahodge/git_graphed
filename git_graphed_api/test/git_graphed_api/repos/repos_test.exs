defmodule GitGraphedApi.ReposTest do
  use GitGraphedApi.DataCase

  alias GitGraphedApi.Repos

  describe "repositories" do
    alias GitGraphedApi.Repos.Repository

    @valid_attrs %{
      repo_id: "some repo_id",
      repo_name: "some repo_name",
      repo_private: true
    }
    @update_attrs %{
      repo_id: "some updated repo_id",
      repo_name: "some updated repo_name",
      repo_private: false
    }
    @invalid_attrs %{repo_id: nil, repo_name: nil, repo_private: nil}

    def repository_fixture(attrs \\ %{}) do
      {:ok, repository} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Repos.create_repository()

      repository
    end

    test "list_repositories/0 returns all repositories" do
      repository = repository_fixture()
      assert Repos.list_repositories() == [repository]
    end

    test "get_repository!/1 returns the repository with given id" do
      repository = repository_fixture()
      assert Repos.get_repository!(repository.id) == repository
    end

    test "create_repository/1 with valid data creates a repository" do
      assert {:ok, %Repository{} = repository} = Repos.create_repository(@valid_attrs)
      assert repository.repo_id == "some repo_id"
      assert repository.repo_name == "some repo_name"
      assert repository.repo_private == true
    end

    test "create_repository/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Repos.create_repository(@invalid_attrs)
    end

    test "update_repository/2 with valid data updates the repository" do
      repository = repository_fixture()

      assert {:ok, %Repository{} = repository} =
               Repos.update_repository(repository, @update_attrs)

      assert repository.repo_id == "some updated repo_id"
      assert repository.repo_name == "some updated repo_name"
      assert repository.repo_private == false
    end

    test "update_repository/2 with invalid data returns error changeset" do
      repository = repository_fixture()
      assert {:error, %Ecto.Changeset{}} = Repos.update_repository(repository, @invalid_attrs)
      assert repository == Repos.get_repository!(repository.id)
    end

    test "delete_repository/1 deletes the repository" do
      repository = repository_fixture()
      assert {:ok, %Repository{}} = Repos.delete_repository(repository)
      assert_raise Ecto.NoResultsError, fn -> Repos.get_repository!(repository.id) end
    end

    test "change_repository/1 returns a repository changeset" do
      repository = repository_fixture()
      assert %Ecto.Changeset{} = Repos.change_repository(repository)
    end
  end
end
