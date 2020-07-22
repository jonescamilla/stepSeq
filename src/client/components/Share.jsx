import React from 'react';

const Share = () => {
  // render buttons with dummy click functionality
  return (
    <div className="Share">
      <button onClick={() => { console.log('share') }}>Share</button>
      <button onClick={() => { console.log('Trash') }}>Trash</button>
    </div>
  )
}

export default Share;