import React, { useEffect, useRef, useState } from "react";

function PixelGenerator() {
    const [heigthValue, setHeigthValue] = useState(0)
    const [widthValue, setWidthValue] = useState(0)
    const [colorValue, setColorValue] = useState(null)
    
    const [draw, setDraw] = useState(false)
    
    const [erase, setErase] = useState(false)
    const [eraseHover, setEraseHover] = useState(false)

    const wrapper = useRef()
    
    const createGrid = () => {
      return (
        <div ref={wrapper} className="mt-10 mx-auto" style={{ display: "grid", gridTemplateColumns: `repeat(${widthValue}, 20px)`, gap: "1px" }}>
          {[...Array(heigthValue * widthValue)].map((_, index) => (
            <div
              key={index}
              className='gridcol'
              onMouseDown={handleMouseDown}
              onMouseOver={handleMouseOver}
              onMouseUp={handleMouseUp}
            />
          ))}
        </div>
      );
    };

    const handleMouseDown = (e) => {
        setDraw(true) 
        if (erase) {
            setEraseHover(true)
            e.target.style.backgroundColor = 'transparent';
        } else {
            e.target.style.backgroundColor = colorValue;
        };
        
    }

    const handleMouseOver = (e) => {
        if (eraseHover) {
            e.target.style.backgroundColor = 'transparent';
        } else if (draw) {
            e.target.style.backgroundColor = colorValue;
        };
    }

    const handleMouseUp = () => {
        setDraw(false);
        setEraseHover(false)
    }

    function clearRows () {
       setHeigthValue(0)
       setWidthValue(0)
    }


    return (
    <div className="container flex bg-slate-50 h-auto w-1/2 p-10 flex-col">
      <div className="controls flex justify-between items-center">
        <div className="width  flex flex-col">
          <label className="" htmlFor="width">Width</label>
          <input type="range" min={0} max={35} name="width" 
          value={widthValue}
          onChange={(e) => setWidthValue(e.target.value)}></input>
          <span>{widthValue     }</span>
        </div>

        <div className="heigth flex flex-col">
          <label className="" htmlFor="heigth">Heigth</label>
          <input type="range" min={0} max={35} name="heigth"
          value={heigthValue}
          onChange={(e) => setHeigthValue(e.target.value)}></input>
          <span>{heigthValue}</span>
        </div>

      
      </div>

      <div className="flex justify-between items-center mt-10">
            <button className="bg-green-500 p-2 rounded-md" onClick={clearRows}>Clear grid</button>
            <input type="color"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)} />
            <button className="bg-green-500 p-2 rounded-md" onClick={(e) => setErase(true)}>Erase</button>
            <button className="bg-green-500 p-2 rounded-md" onClick={(e) => setErase(false)}>Paint</button>
        </div>

        {createGrid()}
    </div>
  );
}

export default PixelGenerator;
