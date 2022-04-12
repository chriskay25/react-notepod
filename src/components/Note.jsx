const Note = ({ note }) => {
  return <li className="note">{note.attributes.content}</li>;
};

export default Note;
