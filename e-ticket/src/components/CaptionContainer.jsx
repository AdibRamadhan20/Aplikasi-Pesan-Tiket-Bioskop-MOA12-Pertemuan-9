// src/components/CaptionContainer.jsx
import React from 'react';

const CaptionContainer = ({ caption, onClose }) => {
  return (
    <div className="caption-container" style={{ display: caption ? 'block' : 'none' }}>
      <p>{caption}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CaptionContainer;
