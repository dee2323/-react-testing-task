import { render, screen } from "@testing-library/react";
import TasksList from ".";
test("should display tasks", () => {
    let todo = [];
    todo.push({ id: 1, task: "learn", isCompleted: false });
    todo.push({ id: 2, task: "jstudy", isCompleted: false });

    render(<TasksList tasks={todo} handleDeletingTask={jest.fn()}
        handleCompletion={() => { }} isSearching={false} />);
    const DisplayTasks = screen.getByTitle("todos");
    expect(DisplayTasks.children.length).toBe(2);

});