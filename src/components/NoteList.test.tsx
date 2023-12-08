import { render, screen } from "@testing-library/react";
import NoteList from "./NoteList";
import "@testing-library/jest-dom";
import { BUTTON_TYPES } from "../utils";
import { NoteProps } from "./Note";
import { names } from "../App";

test("renders note list correctly", () => {
  const onDelete = jest.fn();
  const timestamp = new Date();

  const notes: NoteProps[] = [
    {
      type: BUTTON_TYPES.BEER,
      content: "Note 1 Content",
    },
    {
      type: BUTTON_TYPES.PHONE,
      content: "Note 2 Content",
    },
  ].map((note) => ({
    ...note,
    onDelete,
    timestamp,
  }));

  render(<NoteList notes={notes} onDelete={onDelete} />);

  screen.getAllByText(names.name1).forEach((element) => {
    expect(element).toBeInTheDocument();
  });
  expect(screen.getByText("Note 1 Content")).toBeInTheDocument();

  screen.getAllByText(names.name2).forEach((element) => {
    expect(element).toBeInTheDocument();
  });

  expect(screen.getByText("Note 2 Content")).toBeInTheDocument();
});
