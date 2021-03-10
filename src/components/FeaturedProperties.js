import React from 'react'
import './FeaturedProperties.css';
import CardItem from './CardItem';
import './CardItem.css';
export default function FeaturedProperties() {
    return (
        <>
            <div className="cards__container">
                <div className="header-title">
                    <h1 className="featured__listings--title">Start Your Journey With Our Featured Estate</h1>
                </div>
                <div className="cards__item">
                    
                        <CardItem 
                            src="https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            title="Apartment Henrick de Keijserstraat"
                            price="5000"
                            rooms="6"
                            area="45"
                            baths="2"
                            location="9723 DR Groningen (De Meeuwen)"
                        />
                        <CardItem 
                            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Apartment Van Vollenhovenlaan"
                            price="3500"
                            rooms="6"
                            area="35"
                            baths="2"
                            location="3527 JE Utrecht (Transwijk-Noord)"
                        />
                        <CardItem 
                            src="https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Apartment Paterswoldseweg 269 2"
                            price="2650"
                            rooms="3"
                            area="50"
                            baths="2"
                            location="9728 AE Groningen (Corpus den Hoorn)"
                        />
                        <CardItem 
                            src="https://images.pexels.com/photos/5353918/pexels-photo-5353918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Apartment Paterswoldseweg 269 2"
                            price="2650"
                            rooms="3"
                            area="50"
                            baths="2"
                            location="9728 AE Groningen (Corpus den Hoorn)"
                        /><CardItem 
                            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Apartment Paterswoldseweg 269 2"
                            price="2650"
                            rooms="3"
                            area="50"
                            baths="2"
                            location="9728 AE Groningen (Corpus den Hoorn)"
                        />
                        <CardItem 
                            src="https://images.pexels.com/photos/3277921/pexels-photo-3277921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Apartment Paterswoldseweg 269 2"
                            price="2650"
                            rooms="3"
                            area="50"
                            baths="2"
                            location="9728 AE Groningen (Corpus den Hoorn)"
                        />
                    
                </div>
            </div>
        </>
        
    )
}
