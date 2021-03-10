import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="logo">
                    <a href="/" className="logo-link">
                        <i class="fas fa-home"></i>
                    </a>
                </div>
                <div className="menu-footer">
                    <a href="/" className="menu-link">About us</a>
                    <a href="/" className="menu-link">Advertise</a>
                    <a href="/" className="menu-link">Fees</a>
                    <a href="/" className="menu-link">Contact us</a>
                </div>
                <div className="menu-footer">
                    <a href="/" className="menu-link">Register</a>
                    <a href="/" className="menu-link">Login</a>
                    <a href="/" className="menu-link">Find Property</a>
                    <a href="/" className="menu-link">Post your listing</a>
                </div>
        
                <ul className="social">
                    <li className="social-icon">
                        <a href="/"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li className="social-icon">
                        <a href="/"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li className="social-icon">
                        <a href="/"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li className="social-icon">
                        <a href="/"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li className="social-icon">
                        <a href="/"><i class="fab fa-language"></i></a>
                    </li>
                  
                </ul>
            </div>
        </div>
    )
}
