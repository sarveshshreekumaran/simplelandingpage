import React from "react";

function Head() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Sweets
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Head;
