import React, { useState } from "react";

export default function NotesApp() {
  // Store notes as a dictionary { "Title": "Note content" }
  const [notesDict, setNotesDict] = useState({});

  const [formData, setFormData] = useState({ title: "", Note: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    // Add new key-value pair to dictionary
    setNotesDict((prevDict) => ({
      ...prevDict,
      [formData.title]: formData.Note
    }));

    // Reset inputs
    setFormData({ title: "", Note: "" });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="Note"
          placeholder="Note"
          value={formData.Note}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-amber-500 text-white p-2 rounded">
          Save
        </button>
      </form>

      {/* Render dictionary entries */}
      <h2 className="text-xl font-bold mt-6">Saved Notes (Dictionary):</h2>
      <pre className="bg-gray-100 p-3 rounded mt-2">
        {JSON.stringify(notesDict, null, 2)}
      </pre>
    </div>
  );
}