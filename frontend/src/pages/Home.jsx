import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true" || false
    );
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Apply dark mode on initial load and when it changes
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    getNotes();
                } else {
                    alert("Failed to delete note.");
                }
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    setTitle("");
                    setContent("");
                    setIsFormVisible(false);
                    getNotes();
                } else {
                    alert("Failed to make note.");
                }
            })
            .catch((err) => alert(err));
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`app-container ${darkMode ? "dark" : "light"}`}>
            <header className="app-header">
                <h1 className="app-title">My Notes</h1>
                <button 
                    className="theme-toggle-btn" 
                    onClick={toggleDarkMode}
                    aria-label="Toggle theme"
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </header>
            
            <main className="app-content">
                <div className="notes-grid">
                    {notes.length > 0 ? (
                        notes.map((note) => (
                            <Note note={note} onDelete={deleteNote} key={note.id} darkMode={darkMode} />
                        ))
                    ) : (
                        <div className="no-notes-message">
                            <p>No notes yet. Create your first note!</p>
                        </div>
                    )}
                </div>

                <button 
                    className="add-note-btn"
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    aria-label="Add new note"
                >
                    {isFormVisible ? "Cancel" : "Add Note"}
                </button>

                {isFormVisible && (
                    <div className="form-container">
                        <h2 className="form-title">Create a Note</h2>
                        <form onSubmit={createNote} className="note-form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    placeholder="Enter title..."
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    required
                                    placeholder="Write your note here..."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="form-control"
                                    rows="5"
                                ></textarea>
                            </div>

                            <div className="form-actions">
                                <button 
                                    type="button" 
                                    className="cancel-btn"
                                    onClick={() => setIsFormVisible(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="submit-btn">
                                    Save Note
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;