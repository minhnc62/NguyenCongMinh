import { useState } from 'react';
import "./app.css"
import Toolbar from './component/toolbar/Toolbar';
function App() {
  const [isShowBold, setIsShowaBold] = useState(false);
  // const [isShowItalic, setIsShowbItalic] = useState(false);
  // const [isShowUnderline, setIsShowUnderline] = useState(false);

  const showBold = () => {
    setIsShowaBold(!isShowBold);
    // let message = '**Chữ viết đã in đậm**';
    // let bold = document.createElement('span');
    // bold.textContent = message;
    // document.body.appendChild(bold);
    
  }
  const showItalic = () => {
    //setIsShowbItalic(!isShowItalic);
    let message = '**Chữ viết đã in nghiêng**';
    let italic = document.createElement('span');
    italic.textContent = message;
    document.body.appendChild(italic);
    console.log(" *Chữ viết đã in nghiêng*");
  }
  const showUnderline = () => {
    let message = '**Chữ viết đã Gạch chân**';
    let underline = document.createElement('span');
    underline.textContent = message;
    document.body.appendChild(underline);
    //setIsShowUnderline(!isShowUnderline);
    console.log(" Chữ viết đã Gạch chân");
  }
 
  return (
    <div className="app">
      <Toolbar
        showBold={showBold}
        showItalic={showItalic}
        showUnderline={showUnderline}
      />
      <textarea id='txt1' name='area' cols="133" rows="10">
      </textarea >
      
      <div className="text">
        <span> {isShowBold ? " **Chữ viết đã in đậm**" : ""}</span>
        {/* <span> {isShowItalic ? "*Chữ viết đã in nghiêng*" : ""}</span>
        <span> {isShowUnderline ? "Chữ viết đã gạch chân" : ""}</span> */}
      </div>
    </div>
  )
}

export default App
