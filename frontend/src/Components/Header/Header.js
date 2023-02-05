import React from "react";
import './Header.css'
function Header(){
    return(
        <div className="header container-fluid">
            <div className="header_box row">
                {/* <div className="col-lg-6">
            {/* <img src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856940m4nhi.png" alt="Hospital Image"></img> */}

                {/* </div>  */}
                <div className="col-lg-6 Info">

            <h1>Welcome to Care Digital</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dolor necessitatibus vel dolore libero eligendi labore debitis voluptate, minus qui?</p>
            <button className="btn btn-dark">Book Appointment Now</button>
                </div>
                

            </div>
        </div>
    );

}

export default Header;