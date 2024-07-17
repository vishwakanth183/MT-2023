import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, updateList } from "../../redux/slices/countrySlice";

import GoogleIcon from "../../assets/google.png";
import TwitterIcon from "../../assets/fb.png";
import LinkedInIcon from "../../assets/linkedin.png";
import FbIcon from "../../assets/twitter.png";

const Home = () => {
  // Variable to handle dispatch
  const dispatch = useDispatch();

  // Variable to handle countries data
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onFilterChange = (val) => {
    setSelected(val);
    dispatch(updateList(val));
    setIsOpen(false);
  };

  return (
    <div className="container vh-100 d-flex flex-column">
      <nav
        className={`navbar navbar-expand-md bg-white navbar-dark fixed-top ${
          isOpen ? "show" : ""
        }`}
      >
        {/* Navbar */}
        <div class="container">
          <a href="#" class="navbar-brand text-dark fw-semibold">
            Countries
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            class="navbar-toggler bg-black"
          >
            <span class="navbar-toggler-icon" style={{ color: "black" }}></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3">
                <a
                  href="#"
                  className={`nav-link text-dark`}
                  onClick={(event) => {
                    event.preventDefault();
                    onFilterChange("All");
                  }}
                >
                  All
                </a>
                {selected == "All" && (
                  <div
                    style={{ height: 2, backgroundColor: "grey", width: 40 }}
                  ></div>
                )}
              </li>
              <li className="nav-item px-3">
                <a
                  href="#about"
                  className={`nav-link text-dark`}
                  onClick={(event) => {
                    event.preventDefault();
                    onFilterChange("Asia");
                  }}
                >
                  Asia
                </a>
                {selected == "Asia" && (
                  <div
                    style={{ height: 2, backgroundColor: "grey", width: 50 }}
                  ></div>
                )}
              </li>
              <li className="nav-item px-3">
                <a
                  href="#"
                  className={`nav-link text-dark`}
                  onClick={(event) => {
                    event.preventDefault();
                    onFilterChange("Europe");
                  }}
                >
                  Europe
                </a>
                {selected == "Europe" && (
                  <div
                    style={{ height: 2, backgroundColor: "grey", width: 70 }}
                  ></div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* List section */}
      <div
        className="d-flex flex-wrap pt-30 g-0"
        style={{ marginTop: 100, gap: 10 }}
      >
        {countries?.list?.map((item, index) => (
          <div
            key={index}
            className="col d-flex flex-row border border-1 border-black p-2 shadow"
            style={{ minWidth: "49%" }}
          >
            <img
              src={item.flag}
              className="card-img-left border border-1 rounded-start"
              alt="..."
              style={{ height: 90, width: 140, objectFit: "cover" }}
            />
            <div className="d-flex flex-column justify-content-start mt-2 mx-3">
              <p className="fw-semibold">{item.name}</p>
              <p className="text-dark" style={{ marginTop: -15 }}>
                {item.region}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-5">
        <div className="d-flex flex-row justify-content-center px-5 mb-3 gap-3 mt-5">
          <img src={GoogleIcon} style={{ height: 40, width: 40 }} />
          <img src={FbIcon} style={{ height: 40, width: 40 }} />
          <img src={LinkedInIcon} style={{ height: 40, width: 40 }} />
          <img src={TwitterIcon} style={{ height: 40, width: 40 }} />
        </div>

        <div className="d-flex flex-column align-items-center px-5 mb-3 gap-3 mt-5 mb-5">
          <h6>Example@gmail.com</h6>
          <h6 className="text-center">
            Copyirght © 2020 Name. All rights reserved.
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default Home;
