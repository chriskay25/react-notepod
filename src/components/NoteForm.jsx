import { useState } from "react";

const NoteForm = ({ newNote }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newNote(content);
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="New note..."
        style={{
          width: "100%",
          height: "5rem",
          padding: "10px",
          borderRadius: "5px",
        }}
        value={content}
        onChange={handleChange}
      />
      <input type="submit" value="Add Note" />
    </form>
  );
};

export default NoteForm;
