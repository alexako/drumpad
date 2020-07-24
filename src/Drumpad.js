import React from 'react';

const Drumpad = ({ drumKey, onClick }) => {
    console.log('props:', drumKey, onClick);
    return (
        <div className="drum-pad"
            onClick={onClick}>
            <div className="drump-pad__label">
                {drumKey}
            </div>
        </div>
    );
}
 
export default Drumpad;