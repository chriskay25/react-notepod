import { useState } from "react";
import { motion } from "framer-motion";

const NoteForm = ({ newNote, setShowForm }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newNote(content);
    setContent("");
    setShowForm(false);
  };

  return (
    <motion.form
      initial={{
        opacity: 0,
        borderRadius: "5px",
        padding: "10px",
        width: "100%",
        height: "100%",
        scale: 0.2,
        y: "-75px",
        background: "var(--gray-background)",
      }}
      animate={{
        opacity: 1,
        height: "100%",
        scale: 1,
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0, y: "75px" }}
      onSubmit={handleSubmit}
    >
      <textarea
        placeholder="New note..."
        style={{
          maxWidth: "100%",
          width: "100%",
          padding: "6px",
          borderRadius: "5px",
          maxHeight: "80%",
          minHeight: "60%",
        }}
        value={content}
        onChange={handleChange}
      />
      <input className="notepad-buttons" type="submit" value="Add Note" />
    </motion.form>
  );
};

export default NoteForm;
