import NoteCard from "./NoteCard";

export default function NotesSection({
  notesDict,
  onDelete,
  onDownload,
  onDownloadAll,
  onClearAll,
  onView,
}) {
  const noteTitles = Object.keys(notesDict);

  return (
    <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 flex items-center gap-2">
          📚 Storage Notes ({noteTitles.length})
        </h2>

        {/* Action Buttons for All Notes */}
        {noteTitles.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadAll}
              className="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-semibold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm transition-all duration-150 cursor-pointer flex items-center gap-1.5"
            >
              📦 Save All Notes (.txt)
            </button>

            <button
              onClick={onClearAll}
              className="text-xs sm:text-sm text-red-600 hover:text-red-800 underline font-semibold cursor-pointer"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {noteTitles.length === 0 ? (
        <p className="text-gray-400 italic text-center py-6">
          No saved notes in localStorage yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {noteTitles.map((title) => (
            <NoteCard
              key={title}
              title={title}
              onDelete={onDelete}
              onDownload={onDownload}
              onView={onView}
            />
          ))}
        </div>
      )}
    </div>
  );
}
