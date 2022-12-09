import Head from "next/head";
import React, { useEffect, useState } from "react";
import AddModal from '../components/AddModal';
import EditModal from '../components/EditModal';
import RemoveModal from '../components/RemoveModal';
import Header from "../components/Header";
import { useRouter } from "next/router";
import Note from "../components/Note";
import Loading from "../components/Loading";

function dashboard() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isUser = true;
  useEffect(() => {
    setLoading(true);
    if (!isUser) router.push("/login");
    else {
      console.log("User Data");
      setLoading(false);
    }
  }, [isUser]);

  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "Note",
      description: "This is a note",
      created_at: new Date(),
      tag: "study",
      user_uid: "adfadfkjalk232kljl",
    },
  ]);
  return (
    <div>
      <Head>
        <title>Notes App ● Dashboard</title>
        <meta name="description" content="Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {loading && <Loading />}
        <Header />
        <AddModal />
        <EditModal />
        <RemoveModal />
        <div className="flex flex-wrap p-10">
          {notes?.map((note) => (
            <Note key={note.id} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default dashboard;
