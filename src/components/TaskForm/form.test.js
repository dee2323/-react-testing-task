import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from ".";
test("renders add task input", () => {
    render(<TaskForm />);
    const SearchInput = screen.getByPlaceholderText('Enter your task...');
    userEvent.type(SearchInput, 'study');
    expect(SearchInput).toHaveValue("study");
});
test("renders add task button", () => {
    render(<TaskForm />);
    const SearchInput = screen.getByPlaceholderText('Enter your task...');
    userEvent.type(SearchInput, 'study');
    expect(SearchInput).toHaveValue("study");
});