import { getContext, Abort } from "telefunc";
import { Todo } from "../database/Todo";

export { onNewTodo, fetchTodos };

async function onNewTodo({ text }: { text: string }) {
  const { user } = getContext();
  if (!user) {
    throw Abort();
  }
  const authorId = user.id;
  Todo.createNew({ text, authorId });
  const todoItems = Todo.findMany({ authorId });
  return { todoItems };
}

interface Todo {
  todoText: string;
}

async function fetchTodos({ text }: { text: string }) {
  console.log(typeof text);
  return { todoText: "hello" };
}
