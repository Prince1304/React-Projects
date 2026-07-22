export default function FormSection({ formData, onChange, onSubmit }) {
  return (
    <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12">
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-amber-700 tracking-tight">
          Save Notes
        </h1>
        <p className="text-center text-gray-500 text-sm sm:text-base -mt-3">
          Stored locally on your device — never lost on refresh!
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
            onChange={onChange}
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
            onChange={onChange}
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
          💾 Save Note
        </button>
      </form>
    </div>
  );
}
