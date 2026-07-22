export default function NoteCard({ title, onDelete, onDownload, onView }) {
  return (
    <div className="group relative bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-8 border-amber-800 p-6 flex flex-col justify-between min-h-[200px] overflow-hidden">
      {/* Notebook Binder Dots */}
      <div className="absolute top-2 left-0 right-0 flex justify-around px-4 opacity-40">
        <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
        <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
        <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
        <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
      </div>

      <div className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">
          LocalStorage Note
        </span>
        <h3 className="text-2xl font-bold text-white break-words mt-1 line-clamp-2">
          {title}
        </h3>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-500/50">
        <div className="flex items-center gap-1">
          {/* Delete Icon Button */}
          <button
            onClick={() => onDelete(title)}
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

          {/* Download File Icon Button */}
          <button
            onClick={() => onDownload(title)}
            className="text-amber-200 hover:text-white hover:bg-amber-700/50 p-2 rounded-lg transition-colors cursor-pointer"
            title="Download Note as TXT File"
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>

        {/* View Note Modal Button */}
        <button
          onClick={() => onView(title)}
          className="bg-white text-amber-800 hover:bg-amber-50 font-bold px-4 py-2 rounded-xl shadow transition-transform duration-200 active:scale-95 cursor-pointer flex items-center gap-1.5 text-sm"
        >
          📖 View Note
        </button>
      </div>
    </div>
  );
}
