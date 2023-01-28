import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from ".";
test("Test Search input", () => {
    render(<TaskForm handleSearch={() => { }} setIsSearching={jest.fn()} />);
    const SearchInput = screen.getByPlaceholderText("search...");

    userEvent.type(SearchInput, 'study');

    expect(SearchInput).toHaveValue("study");

});