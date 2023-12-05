import React from 'react';
import logo from "../../../src/images/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: '#232f3e' }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="brand mb-3" style={{ letterSpacing: '2px', color: '#818963' }}>
                <img src={logo} alt="" />
              </div>
              <p style={{ color: '#ff9900' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#ff9900' }}>
                links
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none' }}>
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none' }}>
                    Delivery
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none' }}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: '#ffffff', fontSize: '15px', textDecoration: 'none' }}>
                    Where we deliver?
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-1" style={{ letterSpacing: '2px', color: '#ff9900' }}>
                opening hours
              </h5>
              <table className="table mt-3" style={{ color: '#4f4f4f', borderColor: '#666' }}>
                <tbody>
                  <tr>
                    <td>Mon - Fri:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Sat - Sun:</td>
                    <td>8am - 1am</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a style={{ color: '#ff9900', textDecoration: 'none' }} href="">
          © 2020 Copyright: EmaJohn.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </>
    /* End of .container */
  );
};

export default Footer;
