import React from 'react';
import './SearchCardItem.css';

export default function SearchCardItem(props) {
    return (
    
        <div className="search-card">
            <div className="search-image-container">
                <img src={props.src} alt="" className="search-card-image"/>
            </div>
            <div className="search-card-content">
                <div className="card-title">
                    <a href="/">{props.title}</a>
                    
                </div>
                <div className="card-content-container">
                    <div className="location"> <i className="fas fa-map-marker-alt"></i> {props.location}</div>
                    <div className="price">${props.price}<span> /month</span></div>
                    <div className="description">{props.description}</div>
                    <div className="card__stats">
                        <div className="rooms">{props.rooms} <span> Rooms </span> </div>
                        <div className="area">{props.area}m <span>Living area</span></div>
                        <div className="bath-rooms">{props.baths} <span>Bathrooms</span></div>
                    </div>
            </div>
            </div>
        </div>
    
    )
}
