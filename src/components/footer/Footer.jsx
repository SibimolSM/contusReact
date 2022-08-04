import React from 'react';
import './Footer.css';
function Footer(props) {
    return (
        <div className='footerHead'>
            <span className='copyright'>© Copyrights 2020 by CONTUS.</span>
            <span>
                <ul>
                    <li><a href="#">HOME / </a></li>
                    <li><a href="#"> TERMS & CONDITIONS /</a></li>
                    <li><a href="#">PRIVACY POLICY /</a></li>
                    <li><a href="#"> REFUND POLICY /</a></li>
                    <li><a href="#"> FAQ</a></li>
                </ul>
            </span>

        </div>
    );
}

export default Footer;
