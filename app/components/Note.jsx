import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { useRecoilState } from "recoil";
import { modalEdit } from "../atoms/EditModal.js";
import { modalRemove } from "../atoms/RemoveModal.js";
import { NotesContext } from "../context/NotesContext.js";

export default function Note({id, title, description, timestamp, tag, index}) {
  const {activeNote} = useContext(NotesContext)
  const [showEditModal, setShowEditModal] = useRecoilState(modalEdit);
  const [showRemoveModal, setShowRemoveModal] = useRecoilState(modalRemove);
  return (
    <div className="w-[400px] rounded overflow-hidden shadow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{tag}
        </span>
        <span className="inline-block bg-indigo-100 rounded-full font-semibold w-7 h-7 p-1 cursor-pointer text-indigo-500 hover:bg-indigo-200 hover:text-indigo-600 transition mr-2 mb-2 text-sm">
          <PencilSquareIcon  onClick={() => {
            console.log(id, index)
            setShowEditModal(true);
            activeNote(id, index);
          }}/>
        </span>
        <span className="inline-block bg-red-100 rounded-full font-semibold w-7 h-7 p-1 cursor-pointer text-red-500 hover:bg-red-200 hover:text-red-600 transition mr-2 mb-2 text-sm">
          <XCircleIcon onClick={() => setShowRemoveModal(true)}/>
        </span>
      </div>
    </div>
  );
}
