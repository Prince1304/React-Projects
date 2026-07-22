import React, { useState } from "react";
import img from "./assets/img.png";

export default function NotesApp() {
  // 1. Dictionary state storing { "Title": "Note content" }
  const [notesDict, setNotesDict] = useState({});

  // 2. Input form state
  const [formData, setFormData] = useState({
    title: "",
    Note: ""
  });

  // 3. State to track which note is currently opened in the modal
  const [selectedNoteTitle, setSelectedNoteTitle] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Add note to dictionary
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    setNotesDict((prevDict) => ({
      ...prevDict,
      [formData.title]: formData.Note
    }));

    // Reset inputs
    setFormData({
      title: "",
      Note: ""
    });
  };

  // Delete note function
  const handleDelete = (titleToDelete) => {
    setNotesDict((prevDict) => {
      const updatedDict = { ...prevDict };
      delete updatedDict[titleToDelete];
      return updatedDict;
    });

    // Close modal if the currently open note was deleted
    if (selectedNoteTitle === titleToDelete) {
      setSelectedNoteTitle(null);
    }
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

      {/* Saved Notes Cover Grid */}
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
          📚 Notebook Covers ({Object.keys(notesDict).length})
        </h2>

        {Object.keys(notesDict).length === 0 ? (
          <p className="text-gray-400 italic text-center py-6">
            No notes saved yet. Add your first note above!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(notesDict).map((title) => (
              <div
                key={title}
                className="group relative bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-8 border-amber-800 p-6 flex flex-col justify-between min-h-[200px] overflow-hidden"
              >
                {/* Decorative Notebook Binding Dots */}
                <div className="absolute top-2 left-0 right-0 flex justify-around px-4 opacity-40">
                  <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
                </div>

                {/* Cover Title */}
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                    Saved Note
                  </span>
                  <h3 className="text-2xl font-bold text-white break-words mt-1 line-clamp-2">
                    {title}
                  </h3>
                </div>

                {/* Action Buttons: Delete & View */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-500/50">
                  <button
                    onClick={() => handleDelete(title)}
                    className="text-amber-200 hover:text-white hover:bg-amber-700/50 p-2 rounded-lg transition-colors cursor-pointer"
                    title="Delete Note"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => setSelectedNoteTitle(title)}
                    className="bg-white text-amber-800 hover:bg-amber-50 font-bold px-4 py-2 rounded-xl shadow transition-transform duration-200 active:scale-95 cursor-pointer flex items-center gap-1.5 text-sm"
                  >
                    📖 View Note
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Note Reader Modal Popup */}
      {selectedNoteTitle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#fef9c3] rounded-2xl shadow-2xl border-2 border-yellow-300 overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="bg-amber-100 p-4 border-b border-amber-200 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 break-words max-w-[80%]">
                {selectedNoteTitle}
              </h3>
              
              <button
                onClick={() => setSelectedNoteTitle(null)}
                className="text-gray-500 hover:text-gray-800 bg-amber-200/60 hover:bg-amber-300 p-2 rounded-full transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Note Content with Legal Paper background */}
            <div
              className="p-6 sm:p-8 overflow-y-auto flex-1 pl-12 sm:pl-16"
              style={{
                backgroundImage: `
                  linear-gradient(to right, transparent 38px, #f87171 38px, #f87171 40px, transparent 40px),
                  repeating-linear-gradient(transparent, transparent 27px, #e2e8f0 28px)
                `,
                backgroundSize: '100% 28px'
              }}
            >
              <p className="text-gray-800 leading-[28px] whitespace-pre-wrap break-words text-base sm:text-lg font-sans">
                {notesDict[selectedNoteTitle]}
              </p>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-amber-100/80 border-t border-amber-200 flex justify-between items-center">
              <button
                onClick={() => handleDelete(selectedNoteTitle)}
                className="text-red-600 hover:text-red-800 font-semibold text-sm flex items-center gap-1 cursor-pointer"
              >
                🗑️ Delete Note
              </button>

              <button
                onClick={() => setSelectedNoteTitle(null)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}