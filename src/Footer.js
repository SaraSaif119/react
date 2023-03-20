import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function Footer() {
    return (
        <>
        <div class='row'>
            <div class='row col-lg-4 col-md-6 col-sm-12 footer'>
                <div class='foot'>
                <h5>SEE MY PROJECTS AT ONCE & LEAVE HERE YOUR E-MAIL ADDRESS.</h5>
                </div>
                <input class='inp4' placeholder='E-MAIL Address'/>
                <button class='col-lg-4 col-md-6 col-sm-12 btn4'>SUBMET</button>
            </div>
            <div class='end'>
                <a href='https://www.facebook.com/profile.php?id=100025742575328&mibextid=ZbWKwL' class='btn btn-outline-primary a1' target='_blank'>< FaFacebook /></a>
                <a href='https://www.linkedin.com/in/sara-saif-001b21238' class='btn btn-outline-primary a1' target='_blank'>< FaLinkedin /></a>
            </div>
        </div>
        </>

     );
  }
  export default Footer;