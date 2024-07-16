import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/slices/countrySlice';

const Home = () => {

    // Variable to handle dispatch 
    const dispatch = useDispatch();


    // Variable to handle countries data
    const countries = useSelector((state) => state.countries)

    useEffect(() => {
        dispatch(getCountries());
    }, [])

    useEffect(() => {
        console.log("countries", countries)
    }, [countries])

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("All");

    const toggleMenu = () => {
        console.log("yuppppppp")
        setIsOpen(!isOpen);
    };

    const [activePage, setActivePage] = useState("All");

    return <div className='container vh-100 d-flex flex-column'>
        <nav className={`navbar navbar-expand-md bg-white navbar-dark fixed-top ${isOpen ? "show" : ""
            }`}>

            {/* Navbar */}
            <div class="container">
                <a href="#" class="navbar-brand text-dark fw-semibold">Countries</a>
                <button
                    type="button"
                    onClick={toggleMenu}
                    class="navbar-toggler bg-dark"
                >
                    <span class="navbar-toggler-icon bg-dark"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-3">
                            <a href="#" className={`nav-link text-dark`}>All</a>
                            <div style={{ height: 2, backgroundColor: "grey", width: 40 }}></div>
                        </li>
                        <li className="nav-item px-3">
                            <a href="#about" className={`nav-link text-dark`}>Asia</a>
                        </li>
                        <li className="nav-item px-3">
                            <a href="#" className={`nav-link text-dark`}>Europe</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* List section */}
        <div className="d-flex flex-wrap pt-30 g-0" style={{ marginTop: 100,gap:10 }}>
            {countries?.list?.map((item, index) => (
                <div key={index} className="col d-flex flex-row border border-1 border-black p-2 shadow" style={{minWidth:"49%"}}>
                    <img
                        src={item.flag}
                        className="card-img-left border border-1 rounded-start"
                        alt="..."
                        style={{ height: 90, width: 140, objectFit:"cover" }}
                    />
                    <div className="d-flex flex-column justify-content-start mt-2 mx-3">
                        <p className="fw-semibold">{item.name}</p>
                        <p className="text-dark" style={{marginTop:-15}}>{item.region}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Home