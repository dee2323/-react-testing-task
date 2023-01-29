import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from ".";
import TasksList from "../TasksList";
test("renders add task input", () => {
    render(<TaskForm />);
    const addInput = screen.getByPlaceholderText('Enter your task...');
    expect(addInput).toBeInTheDocument();
    userEvent.type(addInput, 'study');
    expect(addInput).toHaveValue("study");
});
test("renders add task button", () => {
    render(<TaskForm />);
    const addButton = screen.getByTitle('add')
    expect(addButton).toBeInTheDocument();

});
