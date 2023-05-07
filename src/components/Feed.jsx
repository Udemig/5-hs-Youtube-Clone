import React from 'react';
import LeftNav from './LeftNav';

const Feed = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <LeftNav />
      <div>Videolar yer alıcak</div>
    </div>
  );
};

export default Feed;
