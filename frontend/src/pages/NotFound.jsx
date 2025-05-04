import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6",
      color: "#1f2937",
      padding: "1rem",
      textAlign: "center",
    },
    title: {
      fontSize: "6rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: "2rem",
      marginBottom: "0.5rem",
    },
    text: {
      maxWidth: "400px",
      marginBottom: "1.5rem",
      fontSize: "1rem",
    },
    button: {
      padding: "0.75rem 2rem",
      fontSize: "1rem",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#1e40af",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Page Not Found</p>
      <p style={styles.text}>
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
