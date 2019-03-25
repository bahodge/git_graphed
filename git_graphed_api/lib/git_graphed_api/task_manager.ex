defmodule GitGraphedApi.TaskManager do
  def perform_async(module, function, args) do
    Task.async(module, function, args)
    |> Task.await(5_000)
  end
end
