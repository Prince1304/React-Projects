export default function NoteModal({
  title,
  content,
  onClose,
  onDelete,
  onDownload,
}) {
  if (!title) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-2xl bg-[#fef9c3] rounded-2xl shadow-2xl border-2 border-yellow-300 overflow-hidden flex flex-col max-h-[85vh]">
        <div className="bg-amber-100 p-4 border-b border-amber-200 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-amber-900 break-words max-w-[80%]">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 bg-amber-200/60 hover:bg-amber-300 p-2 rounded-full transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div
          className="p-6 sm:p-8 overflow-y-auto flex-1 pl-12 sm:pl-16"
          style={{
            backgroundImage: `
              linear-gradient(to right, transparent 38px, #f87171 38px, #f87171 40px, transparent 40px),
              repeating-linear-gradient(transparent, transparent 27px, #e2e8f0 28px)
            `,
            backgroundSize: "100% 28px",
          }}
        >
          <p className="text-gray-800 leading-[28px] whitespace-pre-wrap break-words text-base sm:text-lg font-sans">
            {content}
          </p>
        </div>

        <div className="p-4 bg-amber-100/80 border-t border-amber-200 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onDelete(title)}
              className="text-red-600 hover:text-red-800 font-semibold text-sm cursor-pointer"
            >
              🗑️ Delete
            </button>

            <button
              onClick={() => onDownload(title)}
              className="text-amber-800 hover:text-amber-950 font-semibold text-sm cursor-pointer flex items-center gap-1"
            >
              📥 Save as File
            </button>
          </div>

          <button
            onClick={onClose}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-xl text-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
