import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [userLoggedInDetails, setUserLoggedInDetails] = useState(null);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState("");

  useEffect(() => {
    const user_data = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const email = data.session.user.email;
        const { data: users } = await supabase
          .from("users")
          .select()
          .eq("email", email);
        setUserLoggedInDetails(users[0]);
      } catch (e) {
        console.log(e);
      }
    };
    user_data();
  }, []);

  useEffect(() => {
    const get_notes = async () => {
      const { data } = await supabase
        .from("notes")
        .select()
        .eq("user_uid", userLoggedInDetails?.uid);
      setNotes(data);
    };
    get_notes();
  }, [userLoggedInDetails, notes]);

  const [currentId, setCurrentId] = useState(null);
  const [index, setIndex] = useState(0);

  const updateNote =async (id) => {
    const newNote = notes.find(note => note.id === id)
    setNotes([...notes, newNote])
    await supabase.from('notes').update({
        title, description
    }).eq('id', id)
  };

  const deleteNote = async (id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
    await supabase.from("notes").delete().match({ id: id });
  };

  const addNote = async (id, title, description, tag) => {
    const new_note = {
      id,
      title,
      description,
      user_uid: userLoggedInDetails.uid,
      tag,
    };
    setNotes([...notes, new_note]);
    await supabase.from("notes").insert(new_note);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        updateNote,
        index,
        setIndex,
        currentId,
        setCurrentId,
        description,
        tag, 
        setTag,
        setDescription,
        title,
        setTitle,
        userLoggedInDetails,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
