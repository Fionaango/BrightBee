import React, { createContext, useState } from 'react';

// 1) Create the context
export const JournalContext = createContext();

// 2) Create the provider component
export function JournalProvider({ children }) {
  const [journals, setJournals] = useState([]);

  // Add a new journal entry
  const addJournal = (newEntry) => {
    setJournals((prev) => [newEntry, ...prev]);
  };

  // Delete one journal by key
  const deleteJournal = (key) => {
    setJournals((prev) => prev.filter((entry) => entry.key !== key));
  };

  // Delete all journals
  const deleteAllJournals = () => {
    setJournals([]);
  };

  return (
    <JournalContext.Provider
      value={{
        journals,
        addJournal,
        deleteJournal,
        deleteAllJournals,
      }}
    >
      {children}
    </JournalContext.Provider>
  );
}
