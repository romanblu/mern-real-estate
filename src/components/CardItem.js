import React from 'react'
import './FeaturedProperties.css';

export default function CardItem(props) {
    return (
        <>
            <div className="card">
                <div className="image-container">
                    <img src={props.src} alt="" className="card__image"/>
                </div>
                <div className="card__content">
                    <div className="card-title">
                        <a href="/">{props.title}</a>
                    </div>
                    <div className="price">${props.price}<span> /month</span></div>
                    <div className="card__stats">
                        <div className="rooms">{props.rooms} <span> Rooms </span> </div>
                        <div className="area">{props.area}m <span>Living area</span></div>
                        <div className="bath-rooms">{props.baths} <span>Bathrooms</span></div>
                    </div>
                    <div className="location"> <i className="fas fa-map-marker-alt"></i> {props.location}</div>
                    <button class="ui labeled icon button">
                        Contact seller
                        <i class="icon envelope"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
