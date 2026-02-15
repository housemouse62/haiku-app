// App.jsx
import { useState } from "react";
import HaikuLine from "./HaikuLine";
import { countSyllables } from "./syllableCounter";
import "./App.css";
import { saveHaiku, getAllHaikus, deleteHaiku } from "./haikuStorage";

function App() {
  const [lines, setLines] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const [saved, setSaved] = useState(false);
  const [showHaikus, setShowHaikus] = useState(false);
  const [savedHaikus, setSavedHaikus] = useState("");

  const targetSyllables = [5, 7, 5];

  // Check if haiku is complete
  const isComplete =
    countSyllables(lines.line1) === 5 &&
    countSyllables(lines.line2) === 7 &&
    countSyllables(lines.line3) === 5;

  const fieldsEmpty =
    lines.line1 === "" && lines.line2 === "" && lines.line3 === "";

  const updateLine = (lineKey, value) => {
    setLines((prev) => ({
      ...prev,
      [lineKey]: value,
    }));
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>🌸 Do You Do Haiku? 🪷</h1>
          <p className="subtitle">
            Write a haiku following the 5-7-5 syllable pattern
          </p>
        </header>
        <HaikuLine
          lineNumber={1}
          targetSyllables={targetSyllables[0]}
          value={lines.line1}
          onChange={(value) => updateLine("line1", value)}
        />
        <HaikuLine
          lineNumber={2}
          targetSyllables={targetSyllables[1]}
          value={lines.line2}
          onChange={(value) => updateLine("line2", value)}
        />
        <HaikuLine
          lineNumber={3}
          targetSyllables={targetSyllables[2]}
          value={lines.line3}
          onChange={(value) => updateLine("line3", value)}
        />
        {isComplete && !saved && (
          <div className="complete-message">
            {"✨ Perfect haiku! Well done! ✨"}
          </div>
        )}
        {saved && (
          <div>
            <div className="complete-message">{"✨ Saved! ✨"}</div>
          </div>
        )}
        {/* button row */}
        <div className="button-row">
          {/* Save Button */}
          {isComplete && !saved && (
            <button
              className="save-btn"
              onClick={() => {
                saveHaiku(lines);
                setSaved(true);
                setLines({
                  line1: "",
                  line2: "",
                  line3: "",
                });
                setTimeout(() => setSaved(false), 2000);
                const newSavedHaikus = getAllHaikus();
                setSavedHaikus(newSavedHaikus);
              }}
            >
              Save
            </button>
          )}
          {/* clear the fields button*/}
          {!fieldsEmpty && (
            <button
              className="clear-btn"
              onClick={() => {
                setLines({
                  line1: "",
                  line2: "",
                  line3: "",
                });
              }}
            >
              Clear
            </button>
          )}
          {/* View Haikus/Hide Haikus button */}
          <button
            className="view-haikus-btn"
            onClick={() => {
              if (showHaikus) {
                setShowHaikus(false);
              } else {
                const newSavedHaikus = getAllHaikus();
                setSavedHaikus(newSavedHaikus);
                setShowHaikus(true);
              }
            }}
          >
            {showHaikus ? "Hide Saved Haikus" : "View Saved Haikus"}
          </button>
        </div>
        {/* Example Haikus Area */}
        {!showHaikus ? (
          <div className="example">
            <div className="example-title">Example Haiku:</div>
            <div className="example-text">
              Do you do haiku (5)
              <br />
              Yes I do I do haiku (7)
              <br />I haiku for you (5)
            </div>
          </div>
        ) : (
          <div className="savedHaikus">
            <h2 className="savedHaikus-title">Saved Haikus</h2>
            {savedHaikus.length <= 0 ? (
              <p>No saved haikus, waiting for words of wisdom</p>
            ) : (
              savedHaikus.map((h) => (
                <article key={h.id} className="haiku-card">
                  <p className="haiku-line">{h.line1}</p>
                  <p className="haiku-line">{h.line2}</p>
                  <p className="haiku-line">{h.line3}</p>
                  <button
                    aria-label={`Delete haiku: ${h.line1}`}
                    className="delete-btn"
                    onClick={() => {
                      console.log(h.id);
                      deleteHaiku(h.id);
                      const newSavedHaikus = getAllHaikus();
                      setSavedHaikus(newSavedHaikus);
                    }}
                  >
                    Delete
                  </button>
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
