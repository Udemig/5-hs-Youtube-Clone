import React from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="navbar bg-dark text-light">
      <h1>
        <img
          src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
          style={{ width: '100px' }}
        />
        Youtube
      </h1>

      <div className="d-flex">
        <input type="text" className="form-control" />
        <button className="btn btn-secondary">
          <BsSearch />
        </button>
      </div>

      <span className="pe-4 fs-3">
        <HiOutlineBell />
      </span>
    </header>
  );
};

export default Header;
