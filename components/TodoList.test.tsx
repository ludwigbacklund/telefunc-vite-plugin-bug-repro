import { render } from "@testing-library/react";
import { TodoList } from "./TodoList";

it("does not crash", () => {
  render(<TodoList todoItemsInitial={[]} />);
});
