import Note, { NoteProps } from "./Note";

interface NoteListProps {
  notes: NoteProps[];
  onDelete: (index: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} {...note} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default NoteList;
