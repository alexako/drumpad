import React from 'react';

const Drumpad = ({ drumKey, onMouseDown}) => {
  return (
    <div id={drumKey}
      className="drum-pad"
      onMouseDown={onMouseDown}>
      <div className="drum-pad__label">
        {drumKey}
      </div>
    </div>
  );
}

export default Drumpad;