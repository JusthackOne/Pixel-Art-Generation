import React, { useState } from 'react';

const PixelArtApp = () => {
  const [color, setColor] = useState("#000000"); // Начальный цвет - черный
  const [drawing, setDrawing] = useState(false);
  const [rows, setRows] = useState(16);
  const [cols, setCols] = useState(16);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleMouseDown = () => {
    setDrawing(true);
  };

  const handleMouseOver = (e) => {
    if (drawing) {
      e.target.style.backgroundColor = color;
    }     
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const createGrid = () => {
    return (
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 20px)`, gap: "1px" }}>
        {[...Array(rows * cols)].map((_, index) => (
          <div
            key={index}
            style={{ width: "20px", height: "20px", border: "1px solid #ccc" }}
            onMouseDown={handleMouseDown}
            onMouseOver={handleMouseOver}
            onMouseUp={handleMouseUp}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <div>
        <label>Rows:</label>
        <input type="number" value={rows} onChange={(e) => setRows(e.target.value)} />
      </div>
      <div>
        <label>Columns:</label>
        <input type="number" value={cols} onChange={(e) => setCols(e.target.value)} />
      </div>
      {createGrid()}
    </div>
  );
};

export default PixelArtApp;
