import React from 'react'
import { Link } from 'react-router-dom'
import About from '../pages/About'

function Navbar(props) {
    const mode=props.mode
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode ? "light" : "dark"} bg-${mode ? "light" : "dark"}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${mode ? "dark" : "light"}`} to="/">
            TextUtils
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`text-${mode ? "dark" : "light"} nav-link active  aria-current="page"`}to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`text-${mode ? "dark" : "light"} nav-link active`} to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch my-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={props.bar}
              />
              <label className={`form-check-label me-3 htmlFor="flexSwitchCheckDefault" text-${mode ? "dark" : "light"}`}>
                Dark Mode
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-${mode ? "primary" : "light"} `} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Navbar