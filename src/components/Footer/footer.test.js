import { render, screen } from "@testing-library/react";

import Footer from ".";
test("renders counters for complete tasks and total number of tasks in the footer", () => {
    let tasks = [{ task: 'study', id: 12, isCompleted: false },
    { task: 'reading', id: 13, isCompleted: false }]
    render(<Footer tasks={tasks} countTasks={tasks.length} />);
    const FooterDisplay = screen.getByTitle("footer");
    expect(FooterDisplay.textContent).
        toBe("Tasks 2Completed Tasks 0");
});
test('renders footer correctly', () => {
    render(<Footer tasks={[]} />)
    const footer = screen.getByTitle('footer')
    expect(footer).toBeInTheDocument()
})