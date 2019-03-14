defmodule GitGraphedApiWeb.Schema.Types.TypesLoader do
  use Absinthe.Schema.Notation

  alias GitGraphedApiWeb.Schema.Types

  import_types(Types.UserType)
  import_types(Types.RepositoryType)
end
