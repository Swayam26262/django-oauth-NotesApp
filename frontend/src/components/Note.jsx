import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete, darkMode }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className={`note-container ${darkMode ? "dark" : "light"}`}>
            <div className="note-header">
                <h3 className="note-title">{note.title}</h3>
                <button 
                    className="delete-button"
                    onClick={() => onDelete(note.id)}
                    aria-label="Delete note"
                >
                    🗑️
                </button>
            </div>
            
            <p className="note-content">{note.content}</p>
            
            <p className="note-date">{formattedDate}</p>
        </div>
    );
}

export default Note;