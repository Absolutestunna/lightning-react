import React from 'react';

const NotesAreaComp = (props) => {
  return (
    <div className="notes-area">
      <div className="dx-col">
        <div> Note: </div>
        <p>
          If your EID is different from what is prepopulated above, please
          first log into your computer with your LAN credentials.
        </p>
        <p>
          To report any issues call AIG Global Service Desk at
          <span style={{display: 'inline-block'}}>1-800-HELP-HLP</span>
          or your local <a href="#">IT help desk</a> and have it assigned to
          "Contact Services" assignment group. Please provide the wrong EID,
          correct EID, domain, and LAN ID.
        </p>
      </div>
    </div>
  );

}

export default NotesAreaComp;
