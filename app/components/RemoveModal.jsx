import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// open the modal
import { useRecoilState } from "recoil";
import {
  ExclamationCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { modalRemove } from "../atoms/RemoveModal";

export default function AddModal({ id }) {
  let [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useRecoilState(modalRemove);
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
                  <Dialog.Title as="h3" className='w-full'>
                      <ExclamationCircleIcon className="w-14 h-14 rounded-full text-red-400 hover:text-red-500 cursor-pointer transition mx-auto"/>
                  </Dialog.Title>

                  <div className='text-gray-600  text-center'>
                    Are you sure you want to delete this note?
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                  <button
                      type="button"
                      className="mr-4 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200"
                      onClick={() => setOpen(false)}
                    >
                      Delete
                    </button>
                  <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
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
