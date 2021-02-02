defmodule Hello do
  # It will say Hello, world
  def world do
    IO.puts "Hello, World"
  end

  @doc """
  name - param - string
  prints out Hello, name
  """

  def greet(name) do
    IO.puts "Hello, #{name}"
  end
end

Hello.greet "Wayne"
