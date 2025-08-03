import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedin, FaLocationArrow, FaPhoneAlt, FaTwitterSquare } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import './footer.css';
import Brand from "../../assets/logo-5.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer pt-5">
            <div className="container">
                <div className="row py-3">
                    <div className="col">
                        <h2>
                            Find your next great opportunity!
                        </h2>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Recipient's email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-warning" type="button" id="button-addon2">Send Message</button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container ">
                <div className="row py-4">
                    <div className="col-4">
                        <div className="logo mb-4">
                            <img src={Brand} alt="coretech " height={60} />
                        </div>
                        <p className='mb-4'>
                            We work side by side with you to fully leverage our relationships with the world’s leading technology companies.
                        </p>
                        <div className="footer-social">
                            <a href="#">
                                <FaFacebookSquare size="2em" />
                            </a>
                            <a href="#">
                                <FaLinkedin size="2em" />
                            </a>
                            <a href="#">
                                <FaTwitterSquare size="2em" />
                            </a>
                        </div>
                    </div>
                    <div className="col-3 footer-contact ">


                        <h5><FaLocationArrow className='me-2' /> Corporate Office</h5>
                        <Link to="#">
                            <p>Coppell, Texas</p>
                        </Link>
                        <h5><FaPhoneAlt className='me-2' /> Call us on</h5>
                        <Link to="#">
                            <p> USA: +1 (945) 278 5774</p>
                        </Link>
                        <Link to='#'>
                            <p>India: +91 (775) 788 1212</p>
                            </Link>
                        <h5><FaMessage className='me-2' /> Mail us on</h5>
                        <Link to="#">
                            <p>info@coretechinfra.com</p>
                        </Link>
                        <Link to="#">
                            <p>hr@coretechinfra.com</p>
                        </Link>

                    </div>
                    <div className="col footer-links">
                        <h3>About Company</h3>

                        <Link to="#">Services</Link>
                        <Link to="#">Services</Link>
                        <Link to="#">Services</Link>
                        <Link to="#">Services</Link>
                    </div>
                    <div className="col footer-links">
                        <h3>Support</h3>

                        <Link to="#">Services</Link>
                        <Link to="#">Services</Link>
                        <Link to="#">Services</Link>
                        <Link to="#">Services</Link>
                    </div>
                    
                </div>
                <hr />
            </div>
            <div className="copyright text-center py-3">
                <p>&copy; {new Date().getFullYear()} Coretech Infrastructure Solutions, Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;