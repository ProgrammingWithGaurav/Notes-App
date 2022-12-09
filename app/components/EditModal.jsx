import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// open the modal
import { modalEdit } from "../atoms/EditModal";
import { useRecoilState } from "recoil";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function AddModal({id, title, description, tag}) {
  let [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useRecoilState(modalEdit);
  return (
    <>
      <Transition.Root appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    </div>
                    <div className="mt-2">
                    <div>
                      <label
                        htmlFor="title"
                        className="text-sm font-medium text-gray-700 mb-2 flex items-center"
                      >
                        Tag <LockClosedIcon className='text-[5px] w-4 h-4 ml-2 text-red-300 hover:text-red-400'/>
                      </label>
                      <input
                        type="text"
                        disabled={true}
                        value={"study"}
                        id="title"
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
                        className="block p-2.5 w-full ring-none focus:ring-1 text-gray-900 rounded-lg focus:ring-indigo-500 focus:outline-none focus:border-none"
                        placeholder="Write your thoughts here..."
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      Update
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
