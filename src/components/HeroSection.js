import React from 'react'
import Button from './Button';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Choose Your New Home</h1>
            <p>The largest variety of apartments </p>
            <div className="hero-buttons">
                <div className="first-button">
                    <Button 
                        buttonStyle="ui primary button "
                        buttonSize=""
                        onClick={""} 
                    >Find apartment</Button>
                </div>
                <div className="second-button">
                    <Button 
                        buttonStyle="ui button"
                        buttonSize=""
                        onClick={""}
                        >Post your listing</Button>
                </div>
            </div>
        </div>
    )
}
