import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div class="bg-gray-300 flex flex-col items-center justify-center absolute m-auto w-full h-screen z-30">
        <ClipLoader
          size={40}
          color={"blue"}
          loading={"lazy"}
        />
        <p className='mt-2 text-gray-700 font-medium'>Loading...</p>
    </div>
  );
}

export default Loading;
