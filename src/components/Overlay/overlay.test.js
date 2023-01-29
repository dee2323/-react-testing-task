import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Overlay from ".";

test("renders overlay", () => {
    render(<Overlay setShowOverlay={true} id={''} handleDeletingTask={jest.fn()} />);
    const overlay = screen.getByTitle('overlay');
    expect(overlay).toBeInTheDocument()
    const cancelButton = screen.getByRole('button', {
        name: 'Cancel'
    })
    const removeButton = screen.getByRole('button', {
        name: 'Delete'
    })
    expect(cancelButton).toBeInTheDocument()
    expect(removeButton).toBeInTheDocument()

});

