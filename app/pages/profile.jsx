import { PaperClipIcon } from "@heroicons/react/20/solid";
import Head from "next/head";

export default function Profile() {
    const user = {
        name: "John",
        email: 'john@example.com',
        photoURL: "https://media.istockphoto.com/id/1435129973/photo/handwritten-bible-quote.jpg?b=1&s=170667a&w=0&k=20&c=bfVIgzZashtdl520R5Jq8Wv4_YbssCTkbzN2cW5qT78=",
        joinedDate: "25 December, 2022"

    }
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
            <img src={user.photoURL} className="ml-5 h-20 w-20 rounded-full" alt="profile Pic"/>
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
                    {user.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user.email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                 Account created on {user.joinedDate}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
