import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [userLoggedInDetails, setUserLoggedInDetails] = useState(null);

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
        console.log(users[0])
      } catch (e) {
        console.log(e);
      }
    };
    user_data();
  }, []);

  useEffect(() => {
    const get_notes = async () => {
      const {data} = await supabase.from('notes').select().eq("user_uid", userLoggedInDetails?.uid)
      setNotes(data);
    }
    get_notes();
  }, [userLoggedInDetails, notes])

  const [currentId, setCurrentId] = useState(null);
  const [index, setIndex] = useState(null);

  const updateNote = (id, title, description) => {
    notes[index].title = title;
    notes[index].description = description;
    console.log(notes);
    setNotes(notes);
  };

  const deleteNote = async (id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
    await supabase.from('notes').delete().match({"id": id});

  };

  const addNote = async (id, title, description, tag) => {
    const new_note = {
      id,
      title,
      description,
      user_uid: userLoggedInDetails.uid,
      tag
    }
    setNotes([...notes, new_note]);
    await supabase.from('notes').insert(new_note);
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
