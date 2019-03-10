defmodule GitGraphedApi.RepositoriesTest do
  use GitGraphedApi.DataCase

  alias GitGraphedApi.Repositories

  describe "public_repo" do
    alias GitGraphedApi.Repositories.PublicRepo

    @valid_attrs %{name: "some name"}
    @update_attrs %{name: "some updated name"}
    @invalid_attrs %{name: nil}

    def public_repo_fixture(attrs \\ %{}) do
      {:ok, public_repo} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Repositories.create_public_repo()

      public_repo
    end

    test "list_public_repo/0 returns all public_repo" do
      public_repo = public_repo_fixture()
      assert Repositories.list_public_repo() == [public_repo]
    end

    test "get_public_repo!/1 returns the public_repo with given id" do
      public_repo = public_repo_fixture()
      assert Repositories.get_public_repo!(public_repo.id) == public_repo
    end

    test "create_public_repo/1 with valid data creates a public_repo" do
      assert {:ok, %PublicRepo{} = public_repo} = Repositories.create_public_repo(@valid_attrs)
      assert public_repo.name == "some name"
    end

    test "create_public_repo/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Repositories.create_public_repo(@invalid_attrs)
    end

    test "update_public_repo/2 with valid data updates the public_repo" do
      public_repo = public_repo_fixture()
      assert {:ok, %PublicRepo{} = public_repo} = Repositories.update_public_repo(public_repo, @update_attrs)
      assert public_repo.name == "some updated name"
    end

    test "update_public_repo/2 with invalid data returns error changeset" do
      public_repo = public_repo_fixture()
      assert {:error, %Ecto.Changeset{}} = Repositories.update_public_repo(public_repo, @invalid_attrs)
      assert public_repo == Repositories.get_public_repo!(public_repo.id)
    end

    test "delete_public_repo/1 deletes the public_repo" do
      public_repo = public_repo_fixture()
      assert {:ok, %PublicRepo{}} = Repositories.delete_public_repo(public_repo)
      assert_raise Ecto.NoResultsError, fn -> Repositories.get_public_repo!(public_repo.id) end
    end

    test "change_public_repo/1 returns a public_repo changeset" do
      public_repo = public_repo_fixture()
      assert %Ecto.Changeset{} = Repositories.change_public_repo(public_repo)
    end
  end
end
