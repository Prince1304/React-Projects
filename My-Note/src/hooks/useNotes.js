import { useState, useEffect } from "react";

export default function useNotes() {
  // 1. Initialize notesDict state from localStorage
  const [notesDict, setNotesDict] = useState(() => {
    const savedNotes = localStorage.getItem("my_react_notes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  // 2. Input form state
  const [formData, setFormData] = useState({
    title: "",
    Note: "",
  });

  // 3. State to track open modal
  const [selectedNoteTitle, setSelectedNoteTitle] = useState(null);

  // 4. Automatically sync notesDict to localStorage
  useEffect(() => {
    localStorage.setItem("my_react_notes", JSON.stringify(notesDict));
  }, [notesDict]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add note to dictionary & local storage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    setNotesDict((prevDict) => ({
      ...prevDict,
      [formData.title]: formData.Note,
    }));

    // Reset input fields
    setFormData({
      title: "",
      Note: "",
    });
  };

  // Delete note function
  const handleDelete = (titleToDelete) => {
    setNotesDict((prevDict) => {
      const updatedDict = { ...prevDict };
      delete updatedDict[titleToDelete];
      return updatedDict;
    });

    if (selectedNoteTitle === titleToDelete) {
      setSelectedNoteTitle(null);
    }
  };

  // Function to download a single note as a .txt file
  const handleDownloadFile = (title) => {
    const noteContent = notesDict[title];
    if (!noteContent) return;

    const fileData = `Title: ${title}\n====================\n\n${noteContent}`;

    const blob = new Blob([fileData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    const safeFileName = title.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    link.download = `${safeFileName}_note.txt`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Function to download ALL notes formatted nicely in one .txt file
  const handleDownloadAllNotes = () => {
    const totalNotes = Object.keys(notesDict).length;
    if (totalNotes === 0) return;

    let combinedText = `========================================\n`;
    combinedText += `          MY SAVED NOTES COLLECTION     \n`;
    combinedText += `          Total Notes: ${totalNotes}   \n`;
    combinedText += `          Exported on: ${new Date().toLocaleDateString()}\n`;
    combinedText += `========================================\n\n`;

    Object.entries(notesDict).forEach(([title, content], index) => {
      combinedText += `----------------------------------------\n`;
      combinedText += `NOTE #${index + 1}: ${title.toUpperCase()}\n`;
      combinedText += `----------------------------------------\n`;
      combinedText += `${content}\n\n\n`;
    });

    const blob = new Blob([combinedText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `all_saved_notes_${Date.now()}.txt`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Clear all notes from local storage
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all saved notes?")) {
      setNotesDict({});
      localStorage.removeItem("my_react_notes");
    }
  };

  return {
    notesDict,
    formData,
    selectedNoteTitle,
    setSelectedNoteTitle,
    handleChange,
    handleSubmit,
    handleDelete,
    handleDownloadFile,
    handleDownloadAllNotes,
    handleClearAll,
  };
}
