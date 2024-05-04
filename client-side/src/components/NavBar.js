import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-lg-4 d-flex align-items-center">
                        <a className="navbar-brand" href="#">
                            <img src="../assets/images/logo.jpg" alt="Logo" style={{ width: '50px' }} /> 
                        </a>
                    </div>

                    <div className="col-lg-4">
                        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Rooms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Facilities</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex align-items-center justify-content-end">
                        <span className="me-3">Call us: +123-456-7890</span> 
                        <button className="btn btn-primary" type="button">Book Now</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

