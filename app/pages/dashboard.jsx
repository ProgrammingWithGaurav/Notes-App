import Head from "next/head";
import React, { useEffect, useState } from "react";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import RemoveModal from "../components/RemoveModal";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Note from "../components/Note";
import Loading from "../components/Loading";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { supabase } from "../supabaseClient";

function dashboard() {
  const [loading, setLoading] = useState(false);
  const { notes } = useContext(NotesContext);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log(data);
      if (!data.session.user) {
        router.push("/");
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    getUser();
  }, []);
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
        {notes.length > 0 && (
          <>
            <EditModal />
            <RemoveModal />
          </>
        )}
        <div className="flex flex-wrap p-10">
          {notes.map((note, index) => (
            <Note key={note.id} {...note} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default dashboard;
