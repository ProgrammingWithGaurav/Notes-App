import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";

// open the modal
import { modalAdd } from "../atoms/AddModal";
import { useRecoilState } from "recoil";
import { NotesContext } from "../context/NotesContext";

export default function AddModal() {
  const {addNote} = useContext(NotesContext);
  let [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [open, setOpen] = useRecoilState(modalAdd);
  return (
    <>
      <Transition.Root appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() =>{
          setOpen(false);
          setTitle('');
          setDescription('');
          setTag('');
        }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add a Note
                  </Dialog.Title>
                  <div className="mt-2">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-3">
                      <label
                        htmlFor="description"
                        className="text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block p-2.5 w-full ring-none focus:ring-1 text-gray-900 rounded-lg focus:ring-indigo-500 focus:outline-none focus:border-none"
                        placeholder="Write your thoughts here..."
                      />
                    </div>
                    <div className='mt-3'>
                      <label
                        htmlFor="tag"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Tag
                      </label>
                      <input
                        type="text"
                        id="tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                      console.log(title.trim())
                        if(title.trim() !== "" && description.trim() !== "" && tag.trim() !== "") {
                        setOpen(false);
                        addNote(Math.floor(Math.random() * 1000), title, description, tag);
                       }
                      }}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
