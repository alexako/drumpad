import React from 'react';

const Drumpad = ({ drumKey, onMouseDown, sound}) => {
  return (
    <div id={drumKey}
      className="drum-pad"
      onMouseDown={onMouseDown}>
      <div className="drum-pad__label">
        {drumKey}
        <audio id={drumKey.toUpperCase()}
          className="clip"
          src={window.location.href + sound.path}>
        </audio>
      </div>
    </div>
  );
}

export default Drumpad;