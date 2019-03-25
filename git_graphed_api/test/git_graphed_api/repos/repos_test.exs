defmodule GitGraphedApi.ReposTest do
  use GitGraphedApi.DataCase

  alias GitGraphedApi.Repos

  describe "repositories" do
    alias GitGraphedApi.Repos.Repository

    @valid_attrs %{
      repo_name: "repo_name",
      repo_id: 321,
      repo_private: true,
      fullname: "repo_fullname",
      html_url: "www.repo.com",
      description: "repo_description",
      language: "repo_language",
      default_branch: "master",
      stargazers_count: 0,
      watchers_count: 0,
      forks_count: 0,
      open_issues_count: 0,
      size: 0,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      fork: false,
      has_issues: false,
      has_projects: false,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      archived: false,
      repo_created_at: DateTime.utc_now(),
      repo_updated_at: DateTime.utc_now(),
      repo_pushed_at: DateTime.utc_now(),
      user_id: 2
    }
    # @update_attrs %{
    #   repo_name: "repo_name_1",
    #   repo_id: 123,
    #   repo_private: false,
    #   fullname: "repo_fullname_1",
    #   html_url: "www.repo.com_1",
    #   description: "repo_description_1",
    #   language: "repo_language_1",
    #   default_branch: "master_1",
    #   stargazers_count: 0,
    #   watchers_count: 0,
    #   forks_count: 0,
    #   open_issues_count: 0,
    #   size: 0,
    #   forks: 0,
    #   open_issues: 0,
    #   watchers: 0,
    #   fork: true,
    #   has_issues: true,
    #   has_projects: true,
    #   has_downloads: true,
    #   has_wiki: true,
    #   has_pages: true,
    #   archived: true,
    #   repo_created_at: DateTime.utc_now(),
    #   repo_updated_at: DateTime.utc_now(),
    #   repo_pushed_at: DateTime.utc_now(),
    #   user_id: 1
    # }
    @invalid_attrs %{
      repo_name: nil,
      repo_id: nil,
      repo_private: nil,
      fullname: nil,
      html_url: nil,
      description: nil,
      language: nil,
      default_branch: nil,
      stargazers_count: nil,
      watchers_count: nil,
      forks_count: nil,
      open_issues_count: nil,
      size: nil,
      forks: nil,
      open_issues: nil,
      watchers: nil,
      fork: nil,
      has_issues: nil,
      has_projects: nil,
      has_downloads: nil,
      has_wiki: nil,
      has_pages: nil,
      archived: nil,
      repo_created_at: nil,
      repo_updated_at: nil,
      repo_pushed_at: nil,
      user_id: nil
    }

    @user_attrs %{
      first_name: "Git",
      last_name: "Graphed",
      email: "gitgraphed@gitgraphed.com",
      username: "gitgraphed",
      provider: "github",
      token: "jadspofjasd",
      github_id: "123"
    }

    setup do
      user = user_fixture()
      repository = repository_fixture(%{user_id: user.id})
      {:ok, [user: user, repository: repository]}
    end

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@user_attrs)
        |> GitGraphedApi.Accounts.create_user()

      user
    end

    def repository_fixture(attrs \\ %{}) do
      {:ok, repository} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Repos.create_repository()

      repository
    end

    test "validate context", context do
      assert context[:repository].user_id == context[:user].id
    end

    test "list_repositories/0 returns all repositories", context do
      assert Repos.list_repositories() == [context[:repository]]
    end

    test "get_repository!/1 returns the repository with given id", context do
      assert Repos.get_repository!(context[:repository].id) == context[:repository]
    end

    test "create_repository/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Repos.create_repository(@invalid_attrs)
    end

    test "delete_repository/1 deletes the repository", context do
      repository = repository_fixture(%{user_id: context[:user].id})
      assert {:ok, %Repository{}} = Repos.delete_repository(repository)
      assert_raise Ecto.NoResultsError, fn -> Repos.get_repository!(repository.id) end
    end
  end
end
