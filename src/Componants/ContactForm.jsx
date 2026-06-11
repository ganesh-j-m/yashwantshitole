import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await push(ref(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date().toISOString(),
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Us</h2>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={5}
            style={{ ...styles.input, resize: "vertical" }}
          />
        </div>

        {status === "success" && (
          <p style={styles.successMsg}>✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p style={styles.errorMsg}>❌ Something went wrong. Try again.</p>
        )}

        <button
          onClick={handleSubmit}
          style={{
            ...styles.button,
            opacity: status === "loading" ? 0.7 : 1,
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#0f0f1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    backgroundColor: "#1a1a2e",
    borderRadius: "16px",
    padding: "32px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
  heading: {
    color: "#ffffff",
    marginBottom: "24px",
    fontSize: "22px",
    fontWeight: "600",
    textAlign: "center",
  },
  fieldGroup: { marginBottom: "18px" },
  label: {
    display: "block",
    color: "#cccccc",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    backgroundColor: "#0f0f1a",
    border: "1.5px solid #2e2e4e",
    borderRadius: "10px",
    color: "#ffffff",
    padding: "12px 14px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    backgroundColor: "#7c4dff",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "8px",
  },
  successMsg: {
    color: "#4caf50",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "14px",
  },
  errorMsg: {
    color: "#f44336",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "14px",
  },
};

export default ContactForm;