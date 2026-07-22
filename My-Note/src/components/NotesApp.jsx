import useNotes from "../hooks/useNotes";
import FormSection from "./FormSection";
import HeroImage from "./HeroImage";
import NotesSection from "./NotesSection";
import NoteModal from "./NoteModal";

export default function NotesApp() {
  const {
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
  } = useNotes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 gap-8">
      {/* Form Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden flex flex-col md:flex-row">
        <FormSection
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <HeroImage />
      </div>

      {/* Saved Notes Container */}
      <NotesSection
        notesDict={notesDict}
        onDelete={handleDelete}
        onDownload={handleDownloadFile}
        onDownloadAll={handleDownloadAllNotes}
        onClearAll={handleClearAll}
        onView={setSelectedNoteTitle}
      />

      {/* Note View Modal */}
      <NoteModal
        title={selectedNoteTitle}
        content={selectedNoteTitle ? notesDict[selectedNoteTitle] : ""}
        onClose={() => setSelectedNoteTitle(null)}
        onDelete={handleDelete}
        onDownload={handleDownloadFile}
      />
    </div>
  );
}
