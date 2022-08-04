import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div className='footerList'>
                <span className='copyRights'>© Copyrights 2020 by CONTUS</span>
                <span>
                    <ul>
                        <li><a>HOME /</a> </li>
                        <li><a>TERMS & CONDITION /</a></li>
                        <li><a>PRIVACY POLICY /</a></li>
                        <li><a>REFUND POLICY /</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </span>
            </div>

        </footer>
    );
}

export default Footer;