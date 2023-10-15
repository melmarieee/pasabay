import React from 'react';
import '../../css/navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <a className="navbar-brand p-3 px-5" href="#"><img src="" />Logo</a>
            <ul className="navbar-nav ms-auto my-2 my-lg-0 px-5  navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ padding: '10px' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ padding: '10px' }}>Carpool</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ padding: '10px' }}>Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;