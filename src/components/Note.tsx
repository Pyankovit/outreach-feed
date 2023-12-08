import { names } from "../App";
import { BUTTON_TYPES, millisecondsToStr, SideIcon } from "../utils";

export interface NoteProps {
  timestamp: Date;
  type: BUTTON_TYPES;
  content: string;
  onDelete: () => void;
}

const Note: React.FC<NoteProps> = ({ timestamp, type, content, onDelete }) => {
  return (
    <div class="group/item grid grid-cols-12">
      <div class="flex items-center">
        {millisecondsToStr(
          (new Date().getTime() - new Date(timestamp).getTime()) as number,
        )}
      </div>
      <SideIcon type={type} />

      <div class="col-span-9 ">
        <div class="mb-6 mt-6 rounded-lg bg-slate-200 p-4 ">
          <div>
            <div>
              <p>
                <span class="font-semibold text-cyan-500">{names.name1}</span>
                {` had added a ${type} with `}
                <span class="font-semibold text-cyan-500">{names.name2}</span>
              </p>
              <p class="text-gray-600">{content}</p>
            </div>
            <div>
              <div class="flex justify-end">
                <button
                  onClick={onDelete}
                  class="duration-600 invisible rounded  px-4 py-2 font-bold transition-opacity group-hover/item:visible group-hover/item:bg-cyan-500 group-hover/item:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
