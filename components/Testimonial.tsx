
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            {/* <img className="Mainlogo" src='./images/logo.png'></img> */}
            <p>
              Our business is built off of close relationships and we are
          glad that we are able to share our positive real estate experiences with our clients.
            </p>

           
          </div>

          <div className="footer-middle">
            <div className="box">
              <img src='./images/logo.png' width={120} height={120} alt="House" />
              <div>
                <h4 style={{fontSize:'25px', fontWeight:'bold'}}>Need to sell or buy?</h4>
                <p>Donec in bibendum nulla. Sed rdum</p>
                <Link href="/contact" className="contact-link">Contact Us →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Properties</h4>
            <ul>
              <li><Link href="/search">Property Listing</Link></li>
                            <li><Link href="/publish">Upload Property</Link></li>
              <li><Link href="/agents">Our Agents</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/contact">Contact Support</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>


        <style>{`
          .footer {
            background: #0B2C42;
            color: #fff;
            padding: 40px 20px;
          }

          .footer-top {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            justify-content: space-between;
            margin-bottom: 40px;
          }

          .footer-left {
            flex: 1;
            min-width: 250px;
          }

          .logo {
            font-size: 24px;
            margin-bottom: 10px;
          }

          .social p {
            margin-top: 20px;
            font-weight: bold;
          }

          .social .icons {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }

          .social a img {
            height: 24px;
            filter: invert(1);
          }

          .footer-middle {
            flex: 1;
            min-width: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .footer-middle .box {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            display: flex;
            flex-direction: row;
            gap: 10px;
            border-radius: 15px;
            text-align: center;
            align-items: center;
          }

          .footer-middle .contact-link {
            display: inline-block;
            color: #FFA500;
            text-decoration: none;
            margin-top: 5px;
          }

          .footer-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 40px;
            margin-bottom: 30px;
          }

          .footer-links h4 {
            font-size: 16px;
            margin-bottom: 10px;
            color: #fff;
          }

          .footer-links ul {
            list-style: none;
            padding: 0;
          }

          .footer-links ul li {
            margin-bottom: 8px;
            color: #bbb;
            font-size: 14px;
            cursor: pointer;
          }

          .footer-bottom {
            text-align: center;
            font-size: 14px;
            color: #ccc;
            padding-top: 20px;
            border-top: 1px solid #2c4e69;
          }

          .Mainlogo{
              width: 200px;
    padding: 20px 0;
          }

          @media (max-width: 768px) {
            .footer-top {
              flex-direction: column;
              align-items: center;
            }

            .footer-middle .box {
              flex-direction: column;
              text-align: center;
            }

            .footer-middle img {
              width: 100px;
              height: 100px;
            }

            .footer-links {
              grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
              gap: 20px;
                      text-align: -webkit-center;
            }
          }

          @media (max-width: 480px) {
            .logo {
              font-size: 20px;
              text-align: center;
            }

            .footer-left p {
              text-align: center;
            }

            .social {
              align-items: center;
              justify-content: center;
              text-align: center;
            }

            .social .icons {
              justify-content: center;
            }

            .footer-middle {
        margin-top: 20px;
        width: 95%;
        display: block;
            }
          }
        `}</style>
      </footer>
    </div>
  )
}

export default Footer
