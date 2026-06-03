import { useState } from "react";
import emailjs from "emailjs-com";
import "./Suggestion.css"; // Create this CSS file for styling

export default function Suggestion({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_909jgfc",
      "template_xaqldwj",
      form,
      "ysqyGd6BtiQOLrHW3"
    )
    .then(() => {
      alert("Suggestion sent ✅");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
      onClose();
    })
    .catch(() => {
      alert("Failed ❌");
      setLoading(false);
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* ❌ Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>Send Suggestion</h2>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Suggestion"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}