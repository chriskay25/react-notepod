import { useSelector } from "react-redux";
import NoteForm from "./NoteForm";
import Note from "./Note";
import { motion, AnimatePresence } from "framer-motion";

const Notepad = ({ newNote, showForm, setShowForm }) => {
  const episode = useSelector((state) => state.episodeReducer.episode);
  const notes = useSelector((state) => state.noteReducer.notes);

  return (
    <div className="notepad">
      <AnimatePresence exitBeforeEnter>
        {showForm ? (
          <NoteForm
            key={1}
            newNote={newNote}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        ) : (
          <motion.ul
            key={2}
            initial={{
              opacity: 0,
              height: "100%",
              scale: 0.2,
              y: "-75px",
              borderRadius: "5px",
              padding: "10px",
              background: "var(--gray-text)",
              color: "white",
              overflowY: "auto",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              height: "100%",
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0, y: "75px" }}
          >
            {notes &&
              notes
                .filter((note) => note.attributes.episodeApiId === episode.id)
                .map((note) => <Note key={note.id} note={note} />)}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notepad;
