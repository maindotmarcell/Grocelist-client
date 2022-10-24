import React, { useState } from 'react';


const Timeline = () => {
  const [createNewEvent, setCreateNewEvent] = useState(false);

  const openCreateNewEvent = () => {
    setCreateNewEvent(true);
  };

  const closeCreateNewList = () => {
    setCreateNewEvent(false);   //remove if value is false
  };
    
return (
   <div>
      <h2> Lets view the Timeline </h2>
      <div>
        <button onClick={openCreateNewEvent}> View Event </button>
        <button onClick={closeCreateNewList}> Hide Event </button>
			
      </div>

    </div>
    
    
    
    );
};
export default Timeline;