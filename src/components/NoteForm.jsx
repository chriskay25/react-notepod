import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../actions/notes";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(note));
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
        onChange={handleChange}
      />
      <input type="submit" value="Add Note" />
    </form>
  );
};

export default NoteForm;
