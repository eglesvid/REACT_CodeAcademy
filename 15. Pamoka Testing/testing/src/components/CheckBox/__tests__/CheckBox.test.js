import CheckBox from "../CheckBox";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CheckBox", () => {
  test("CheckBox should appear on screen when all props are given", async () => {
    render(<CheckBox label="Labas" id={8} checked={true} onChange={() => {}} />);
    const label = await screen.findByText("Labas");
    const checkbox = await screen.findByRole("checkbox");

    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  test('checkbox should appear unchecked when checked prop is "false"', async () => {
    render(<CheckBox label="Labas" id={8} checked={false} onChange={() => {}} />);
    const checkbox = await screen.findByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  test("onChange function should be called when checkbox is clicked", async () => {
    const onChange = jest.fn();
    render(<CheckBox label="Labas" id={8} checked={false} onChange={onChange} />);

    const checkbox = await screen.findByRole("checkbox");
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledWith(true);
  });

  test("id should appear on checkbox when it is passed to props", async () => {
    render(<CheckBox label="Labas" id={8} checked={false} onChange={() => {}} />);
    const checkbox = await screen.findByRole("checkbox");

    expect(checkbox).toHaveProperty("id", "8");
  });

  test("id should not appear on checkbox when there is no id prop passed", async () => {
    render(<CheckBox label="Labas" checked={false} onChange={() => {}} />);
    const checkbox = await screen.findByRole("checkbox");

    expect(checkbox).toHaveProperty("id", "");
  });
});
