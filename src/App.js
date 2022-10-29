import './App.css';
import React, { useState } from 'react';

function App() {

  const [previewColor, setPreviewColor] = useState('BC6D35');
  const [buttonBGColor, setButtonBGColor] = useState('red');
  const [buttonColor, setButtonColor] = useState('white');
  const [borderWidth, setBorderWidth] = useState('1');
  const [borRadius, setBorRadius] = useState('0');
  const [fontsize, setFontsize] = useState('20');
  const [padHorizontal, setPadHorizontal] = useState('0'); /* yatay */
  const [padVertical, setPadVertical] = useState('0'); /*dikey*/

  const text = 'Button Text';
  const style = {
    backgroundColor: `${buttonBGColor}`,
    color: `${buttonColor}`,
    border: `${borderWidth}px solid black`,
    borderRadius: `${borRadius}px`,
    fontSize: `${fontsize}px`,
    padding: `${padHorizontal}px ${padVertical}px`
  };

  const copyStyle = `
    background-color: ${buttonBGColor};
    color: ${buttonColor};
    border: ${borderWidth}px solid black;
    border-radius: ${borRadius}px;
    font-size: ${fontsize}px;
    padding: ${padHorizontal}px ${padVertical}px;
    `

  const copyHandler = () => {
    navigator.clipboard.writeText(copyStyle)
  }

  return (
    <div className="App">
      <div className='left-sidebar'>
        <div className="left-header">
          <h1>Button Styles</h1>
        </div>
        <div className="left-content-items">
          <div className='items'>
            <p>Background Color</p>
            <input onChange={(e) => { setButtonBGColor(e.target.value) }} type="color" name="" />
          </div>
          <div className='items'>
            <p>Color</p>
            <input onChange={(e) => { setButtonColor(e.target.value) }} type="color" name="" />
          </div>
          <div className='items'>
            <p>Border</p>
            <input type="range" onChange={(e) => { setBorderWidth(e.target.value) }} defaultValue='1' min='1' max='10' name="" id="" />
          </div>
          <div className='items'>
            <p>Border Radius</p>
            <input type="range" onChange={(e) => { setBorRadius(e.target.value) }} defaultValue='1' min='1' max='50' name="" id="" />
          </div>
          <div className='items'>
            <p>Font Size</p>
            <input type="range" onChange={(e) => { setFontsize(e.target.value) }} defaultValue='20' min='1' max='100' name="" id="" />
          </div>
          <div className='items'>
            <p>Padding Size</p>
            <input type="range" onChange={(e) => { setPadHorizontal(e.target.value) }} defaultValue='1' min='1' max='50' name="" id="" />
            <input type="range" onChange={(e) => { setPadVertical(e.target.value) }} defaultValue='1' min='1' max='50' name="" id="" />
          </div>
        </div>
      </div>
      <div className='right-side'>
        <div className="right-side-items">
          <div className="preview-area">
            <div className="preview-header">
              <h2>Preview</h2>
            </div>
            <div className="preview-button-area" style={{ backgroundColor: `#${previewColor}` }}>
              <button className='preview-button' style={style}>{text}</button>
            </div>
            <div className="preview-colors">
              <button className='BC6D35' onClick={() => { setPreviewColor('BC6D35') }} style={{ backgroundColor: '#BC6D35' }}></button>
              <button className='E7A201' onClick={() => { setPreviewColor('E7A201') }} style={{ backgroundColor: '#E7A201' }}></button>
              <button className='69BCA5' onClick={() => { setPreviewColor('69BCA5') }} style={{ backgroundColor: '#69BCA5' }}></button>
              <button className='7AB6E5' onClick={() => { setPreviewColor('7AB6E5') }} style={{ backgroundColor: '#7AB6E5' }}></button>
              <button className='072B42' onClick={() => { setPreviewColor('072B42') }} style={{ backgroundColor: '#072B42' }}></button>
              <button className='E42946' onClick={() => { setPreviewColor('E42946') }} style={{ backgroundColor: '#E42946' }}></button>
              <button className='E78898' onClick={() => { setPreviewColor('E78898') }} style={{ backgroundColor: '#E78898' }}></button>
              <button className='941BE1' onClick={() => { setPreviewColor('941BE1') }} style={{ backgroundColor: '#941BE1' }}></button>
              <button className='010100' onClick={() => { setPreviewColor('010100') }} style={{ backgroundColor: '#010100' }}></button>
              <input type="text" onChange={(e) => { setPreviewColor(`${e.target.value}`) }} placeholder={`#${previewColor}`} />
            </div>
          </div>
          <div className="code-area">
            <div className="code-header">
              <div className="code-items">
                <div className='red' style={{ backgroundColor: 'red' }}></div>
                <div className='orange' style={{ backgroundColor: 'orange' }}></div>
                <div className='green' style={{ backgroundColor: 'green' }}></div>
              </div>
              <div className="code-header-text">CSS</div>
            </div>
            <div className="code-text-area">
              <pre>
                .buttonClass &#123;
                <br />
                background-color: {buttonBGColor}
                <br />
                color: {buttonColor}
                <br />
                border: {borderWidth}px solid black
                <br />
                border-radius: {borRadius}px
                <br />
                font-size: {fontsize}px
                <br />
                padding: {padHorizontal}px ${padVertical}px
                <br />
                &#125;
              </pre>
            </div>
            <div className='code-button-area'>
              <button onClick={copyHandler}>Copy to Clipboard !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
