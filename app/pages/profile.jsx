import Head from "next/head";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export default function Profile() {
  const {userLoggedInDetails} = useContext(NotesContext);
  return (
    <>
      <Head>
        <title>Notes App ● Profile</title>
        <meta name="description" content="Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-medium leading-6 text-gray-900 flex flex-col items-center justify-center m-auto">
            <img src={userLoggedInDetails?.photoURL} className="ml-5 h-20 w-20 rounded-full" alt="profile Pic"/>
            <p>Your Profile</p>
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {userLoggedInDetails?.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userLoggedInDetails?.email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                 Account created on {userLoggedInDetails?.created_at}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
