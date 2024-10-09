import React from 'react';
import resume from '../azimansari.pdf'
const DownloadButton = () => {
  return (
    <div>
      <h3>Download My Resume</h3>
      <a
        href={resume}
        download="azimansari.pdf"
        style={{ textDecoration: 'none' }}
      >
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
