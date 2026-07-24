# 📝 My Note — LocalStorage-Powered Notes App

A clean, responsive single-page note-taking app built with **React 19** + **Tailwind CSS v4**.  
All notes are saved directly in your browser's **localStorage** — no sign-up, no server, no data loss on refresh.

> ⚡ Built with Vite for instant hot-reload development.

---

## ✨ Features

| Feature                     | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| ➕ **Add Notes**            | Title + content form with validation                       |
| 💾 **Persistent Storage**   | Notes auto-save to `localStorage` — survive page refreshes |
| 👁️ **View Note**            | Open any note in a notebook-themed modal with ruled lines  |
| 🗑️ **Delete Note**          | Remove individual notes with a single click                |
| 📥 **Download Single Note** | Export a note as a `.txt` file                             |
| 📦 **Download All Notes**   | Batch export all notes into one formatted `.txt` file      |
| 🧹 **Clear All**            | Wipe all saved notes with confirmation                     |
| 📱 **Fully Responsive**     | Works beautifully on mobile, tablet, and desktop           |

---

## 🧱 Project Architecture

```
src/
├── hooks/
│   └── useNotes.js              ← Custom hook — all state + business logic
├── components/
│   ├── NotesApp.jsx             ← Main orchestrator component
│   ├── FormSection.jsx          ← Input form (title, note, submit)
│   ├── HeroImage.jsx            ← Decorative notebook illustration
│   ├── NotesSection.jsx         ← "Storage Notes" header + card grid
│   ├── NoteCard.jsx             ← Individual note card with actions
│   └── NoteModal.jsx            ← Modal overlay for reading a note
├── assets/
│   ├── img.png                  ← Notebook illustration
│   ├── hero.png                 ← Additional assets
│   └── react.svg / vite.svg     ← Brand icons
├── App.jsx                      ← Root component
├── main.jsx                     ← Entry point
└── index.css                    ← Tailwind import
```

### Design Decisions

- **Custom Hook (`useNotes`)** — All state, localStorage sync, and CRUD handlers are extracted into a single reusable hook, keeping UI components pure and testable.
- **Single Responsibility** — Each component has exactly one job (form, card, modal, list, etc.).
- **Prop Drilling over Context** — For this small app, props are passed explicitly. The app is simple enough that a state management library (Redux/Zustand) would be overkill.
- **No External Dependencies** — Apart from React + Tailwind, everything is vanilla. File downloads use `Blob` + `URL.createObjectURL`.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# 1. Navigate to the project
cd "My-Note"

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Production Build

```bash
npm run build
npm run preview
```

The build output is in the `dist/` folder — ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## 🛠️ Tech Stack

| Technology                                                                           | Purpose                 |
| ------------------------------------------------------------------------------------ | ----------------------- |
| [React 19](https://react.dev/)                                                       | UI library              |
| [Vite 8](https://vitejs.dev/)                                                        | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/)                                          | Utility-first styling   |
| [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Client-side persistence |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ using React + Tailwind</p>
<p align="end">Devlope By, Kyada Prince</p>
