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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 gap-8">
      
      {/* Form Card */}
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

      {/* Saved Notes Grid Section */}
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
          📝 Saved Notes ({Object.keys(notesDict).length})
        </h2>

        {Object.keys(notesDict).length === 0 ? (
          <p className="text-gray-400 italic text-center py-6">
            No notes saved yet. Add your first note above!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(notesDict).map(([title, content]) => (
              <div
                key={title}
                className="relative bg-[#fef9c3] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-yellow-300 overflow-hidden flex flex-col justify-between min-h-[220px]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, transparent 28px, #f87171 28px, #f87171 30px, transparent 30px),
                    repeating-linear-gradient(transparent, transparent 27px, #e2e8f0 28px)
                  `,
                  backgroundSize: '100% 28px'
                }}
              >
                {/* Note Header */}
                <div className="pt-3 pl-10 pr-4 pb-2 border-b border-amber-200 flex items-start justify-between bg-amber-100/50">
                  <h3 className="font-bold text-amber-900 text-lg break-words max-w-[80%]">
                    {title}
                  </h3>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(title)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-100/80 p-1 rounded-full transition-colors duration-150 cursor-pointer shrink-0"
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
                </div>

                {/* Note Content - Updated for line wrapping & breaking long words */}
                <div className="pt-2 pl-10 pr-4 pb-4 flex-1">
                  <p className="text-gray-800 leading-[28px] whitespace-pre-wrap break-words font-sans text-sm">
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