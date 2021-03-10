import React from 'react'
import './Button.css';

export default function Button( { buttonStyle, buttonSize, onClick, type, children }) {
    return (
        <>
            <button className={`btn ${buttonStyle} ${buttonSize}`}> {children} </button>
        </>
    )
}
