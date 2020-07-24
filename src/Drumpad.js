import React from 'react';

const Drumpad = ({ drumKey, onClick }) => {
  return (
    <div id={drumKey}
      className="drum-pad"
      onClick={onClick}>
      <div className="drump-pad__label">
        {drumKey}
      </div>
    </div>
  );
}

export default Drumpad;