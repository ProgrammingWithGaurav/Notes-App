import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First note",
      description: "This is the first note",
      created_at: new Date(),
      user_uid: "user1",
    },
    {
      id: 2,
      title: "Second note",
      description: "This is the second note",
      created_at: new Date(),
      user_uid: "user2",
    },
  ]);
  const [userLoggedInDetails, setUserLoggedInDetails] = useState(null);

  useEffect(() => {
    const user_data = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const email = data.session.user.email;
        const { data: users } = await supabase.from("users").select("*");
        setUserLoggedInDetails(users[0]);
        console.log(users[0])
      } catch (e) {
        console.log(e);
      }
    };
    user_data();
  }, []);

  const [currentId, setCurrentId] = useState(notes[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeNote = (id, index) => {
    setCurrentId(id);
    setCurrentIndex(index);
  };

  const updateNote = (id, index, title, description) => {
    const backup_notes = notes;
    // Getting Id for modifying value to the server
    // Getting index to quickly show the changes to the user
    backup_notes[index].title = title;
    backup_notes[index].description = description;
    console.log(backup_notes, title, description);
    setNotes(backup_notes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        updateNote,
        activeNote,
        currentId,
        setCurrentId,
        currentIndex,
        setCurrentIndex,
        userLoggedInDetails,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
