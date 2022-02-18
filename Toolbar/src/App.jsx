import { useState, useRef } from 'react';
import "./app.css"
import Toolbar from './component/toolbar/Toolbar';
import ReactMarkdown from "react-markdown";

function App() {

  const [markdown, setMarkdown] = useState("");
  const bold = "****";
  const italic = "**";
  const underline = "++++";

  const textArea = useRef(null);

  const txtToCurrentPos = (format) => {
    const thisTxtArea = textArea.current;
    const pos = thisTxtArea.selectionStart;
    const end = thisTxtArea.selectionEnd;
    const value = thisTxtArea.value;
    thisTxtArea.value = `${value.slice(0, pos)}${format}${value.slice(pos)}`;
    thisTxtArea.focus();
    thisTxtArea.selectionEnd = end + format.length / 2;
  };

  return (
    <div className="app">
      <Toolbar
        showBold={() => txtToCurrentPos(bold)}
        showItalic={() => txtToCurrentPos(italic)}
        showUnderline={() => txtToCurrentPos(underline)}
      />
      <div className="markdown__container">
        <textarea
          ref={textArea}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          name="editor"
          id="editor"
          cols="133"
          rows="10"
        ></textarea>

        <ReactMarkdown children={markdown} className="markdown__preview" />
      </div>


    </div>
  )
}

export default App
