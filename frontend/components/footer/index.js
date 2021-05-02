import React from 'react';
import Link from 'next/link';
import {FaFacebookF, FaFacebookMessenger} from 'react-icons/fa';
import {TiSocialYoutube} from 'react-icons/ti';
import {HiOutlineMail} from 'react-icons/hi';

function Footer({}) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h6>SHOP INFO</h6>
            <div className="separate"></div>
            <ul>
              <li>
                <Link href="/">
                  <a>CONTACT</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>TERMS</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>PRIVACY</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h6>SHOP BY TAG</h6>
            <div className="separate mb-2"></div>
            <span className="tag">MCU</span>
            <span className="tag">MCU Lite</span>
            <br />
            <span className="tag">FAU</span>
            <span className="tag">Filter</span>
          </div>
          <div className="col-4">
            <h6>Contact us</h6>
            <div className="separate"></div>
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaFacebookMessenger />
            </span>
            <span className="icon">
              <TiSocialYoutube />
            </span>
            <span className="icon" >
              <HiOutlineMail/>
            </span>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .footer {
            margin-top: 150px;
            padding: 30px 0;
            background: black;
            color: white;
          }

          ul {
            padding-left: 0;
          }

          li {
            list-style: none;
          }

          a {
            display: block;
            padding: 5px 0;
          }

          .separate {
            width: 50%;
            height: 2px;
            background: white;
          }

          .tag {
            display: inline-block;
            margin-right: 5px;
            margin-bottom: 5px;
            padding: 5px;
            border: 1px solid white;
          }

          .icon {
            margin-right: 5px;
          }
        `}
      </style>
    </div>
  );
}
export default Footer;
