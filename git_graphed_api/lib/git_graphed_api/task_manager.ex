defmodule GitGraphedApi.TaskManager do
  def perform_async(module, function, args) do
    Task.async(module, function, args)
    |> Task.await()
  end
end
