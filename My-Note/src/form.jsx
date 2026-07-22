import React, { useState } from "react";
// Replace this with your actual local image path
import img from "./assets/img.png";

export default function NotesApp() {
  // 1. Dictionary state to store all notes -> { "Title": "Note content" }
  const [notesDict, setNotesDict] = useState({});

  // 2. Input field state
  const [formData, setFormData] = useState({
    title: "",
    Note: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    if (!formData.title.trim()) return;

    // 3. Save to dictionary using title as the key
    setNotesDict((prevDict) => ({
      ...prevDict,
      [formData.title]: formData.Note
    }));

    // Clear input fields after saving
    setFormData({
      title: "",
      Note: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 gap-8">
      
      {/* Main Form Container */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Section - Form */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-amber-700 tracking-tight">
              Save Notes
            </h1>
            <p className="text-center text-gray-500 text-sm sm:text-base -mt-3">
              Write down your thoughts and never forget them.
            </p>

            {/* Title Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-lg sm:text-xl font-semibold text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter Title"
                required
                className="w-full text-base sm:text-lg p-3 sm:p-4 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 outline-none transition-all duration-200 placeholder:text-gray-400"
              />
            </div>

            {/* Note Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-lg sm:text-xl font-semibold text-gray-700">
                Note
              </label>
              <textarea
                name="Note"
                value={formData.Note}
                onChange={handleChange}
                placeholder="Enter Your Note"
                rows="6"
                required
                className="w-full text-base sm:text-lg p-3 sm:p-4 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 outline-none transition-all duration-200 resize-none placeholder:text-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg sm:text-xl font-semibold p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              ✨ Save Note
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:flex w-full md:w-2/5 bg-gradient-to-br from-amber-100 to-orange-200 items-center justify-center p-6 sm:p-8 md:p-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-300/30 rounded-full blur-2xl"></div>
            <img
              src={img}
              alt="Notebook illustration"
              className="relative w-full max-w-[220px] lg:max-w-[280px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>

      {/* Dictionary Output Display Section */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-amber-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          📚 Saved Dictionary ({Object.keys(notesDict).length})
        </h2>

        {Object.keys(notesDict).length === 0 ? (
          <p className="text-gray-400 italic">No notes saved yet. Add one above!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(notesDict).map(([title, content]) => (
              <div
                key={title}
                className="bg-amber-50 border border-amber-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-amber-800 text-lg border-b border-amber-200 pb-2 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 whitespace-pre-wrap text-sm">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}