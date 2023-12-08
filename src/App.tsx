import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import NoteList from "./components/NoteList";
import { BUTTON_TYPES, getIconForType, SideIcon } from "./utils";

export const names: { name1: string; name2: string } = {
  name1: "You",
  name2: "Milton Romaguera",
};

const placeholder = `Add a note about ${names.name2}...`;

interface NoteProps {
  timestamp: Date;
  type: string;
  content: string;
}

const App: FC = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const inputRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setTouched(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  const handleAddNote = () => {
    if (newNote && selectedType) {
      const timestamp = new Date();
      const note = {
        user: names.name1,
        timestamp,
        type: selectedType,
        content: newNote,
      };
      setNotes([note, ...notes]);
      setNewNote("");
      setSelectedType("");
      setTouched(false);
    }
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const getIconClasses = (buttonType?: BUTTON_TYPES) =>
    buttonType === selectedType
      ? "bg-cyan-400 text-white"
      : "bg-white text-black";

  const getInputButtonsClasses = () => (touched ? "block" : "hidden");

  return (
    <div class="m-12">
      <div class="grid grid-cols-12">
        <div class="w-16" />
        <SideIcon />

        <div class="col-span-9" ref={inputRef}>
          <div class="mb-6 mt-6 rounded-lg bg-slate-200 p-4">
            <div class="group/item mb-6 mt-6 grid gap-6 md:grid-cols-1">
              <textarea
                value={newNote}
                rows={touched ? 3 : 1}
                onChange={(e) => setNewNote(e.target.value)}
                onClick={() => setTouched(true)}
                placeholder={placeholder}
                class="block w-full rounded-lg border border-gray-300 p-2"
              />
            </div>
            <div
              class={`grid gap-6 md:grid-cols-2 ${getInputButtonsClasses()}`}
            >
              <div>
                {Object.values(BUTTON_TYPES).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    class={`me-2  inline-flex items-center rounded-full border p-2.5 text-center text-sm font-medium transition-colors duration-300 hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-blue-300  ${getIconClasses(
                      type,
                    )}`}
                  >
                    {getIconForType(type)}
                  </button>
                ))}
              </div>
              <div class="flex justify-end">
                <button
                  disabled={!selectedType || newNote.length < 1}
                  onClick={handleAddNote}
                  class="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-blue-700  disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NoteList notes={notes as any} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;
