import React from 'react';

const Display = ({soundDesc}) => {
  return ( 
    <div id="display" className="display">
      <div className="display__value">
        {soundDesc}
      </div>
    </div>
   );
}
 
export default Display;