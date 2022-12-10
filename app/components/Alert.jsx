import { XMarkIcon ,BellIcon} from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Alert({text, setIsSignupAlert, setIsDuplicateEmail}) {
  const [visible, setVisible] = useState(true);
  return (
    <div className={`bg-indigo-600/60 z-[100] sticky top-0 ${!visible &&  'hidden'}`}>
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className={`flex rounded-lg bg-indigo-800 p-2`}>
            <BellIcon className="h-6 w-6 text-white" aria-hidden="true"/>
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span >{text}</span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <XMarkIcon onClick={() => {
                setIsDuplicateEmail(false);
                setIsSignupAlert(false);
                setVisible(false);
              }} className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
