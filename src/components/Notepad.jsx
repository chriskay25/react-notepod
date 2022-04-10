import NoteForm from "./NoteForm";

const Notepad = ({ newNote }) => {
  return (
    <div className="notepad">
      <h2
        style={{
          color: "linen",
          fontWeight: 500,
          borderBottom: "2px solid linen",
        }}
      >
        NOTEPAD
      </h2>
      <button
        style={{
          height: "40px",
          width: "40px",
          background: "transparent",
          border: "none",
          padding: "5px",
        }}
      >
        <svg viewBox="-2 -2 20 20" stroke="var(--orange)" strokeWidth="2px">
          <line x1={8} y1={0} x2={8} y2={16} />
          <line x1={0} y1={8} x2={16} y2={8} />
        </svg>
      </button>
      <NoteForm newNote={newNote} />
      <div style={{ padding: "1rem 0" }}>
        <ul></ul>
      </div>
    </div>
  );
};

export default Notepad;
