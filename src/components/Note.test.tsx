import { render, screen, fireEvent } from "@testing-library/react";
import Note, { NoteProps } from "./Note";
import "@testing-library/jest-dom";
import { BUTTON_TYPES } from "../utils";
import { names } from "../App";

test("renders note correctly", () => {
  const timestamp = new Date();
  const onDelete = jest.fn();

  const onDeleteMock = jest.fn();
  const note: NoteProps = {
    timestamp,
    type: BUTTON_TYPES.MESSAGE,
    content: "Test Note Content",
    onDelete,
  };

  render(<Note {...note} onDelete={onDeleteMock} />);

  screen.getAllByText(names.name1).forEach((element) => {
    expect(element).toBeInTheDocument();
  });

  screen.getAllByText(names.name2).forEach((element) => {
    expect(element).toBeInTheDocument();
  });
  expect(screen.getByText("Test Note Content")).toBeInTheDocument();

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(onDeleteMock).toHaveBeenCalled();
});
