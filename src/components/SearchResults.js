import React from 'react'
import SearchCardItem from './SearchCardItem';

import './SearchResults.css'

export default function SearchResults() {
    return (
        <div className="search-results-container">
            <div className="header-title">
                <h1>Search Results For: 3 bedroom, near Palace d'ettere....</h1>
            </div>
            <div className="search-cards-container">
                <SearchCardItem 
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Apartment Beijerlandselaan 131 C"
                    price="1,295 "
                    rooms="4"
                    area="110"
                    baths="2"
                    location="3074 EE Rotterdam (Hillesluis)"
                    description="Recently renovated 2 floor apartment. On walking distance of shops and public transport.

                    Lay out:
                    
                    Entrance on third floor, living room, kitchen, toilet, bed room with direct entrance to balcony, stairs to 4th floor, two bedrooms, bathroom with bath, sink and toilet.
                    
                    Income: 2,5x rent."
                />

                <SearchCardItem 
                    src="https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Apartment Grootzeil 55"
                    price="1,275"
                    rooms="2"
                    area="55"
                    baths="1"
                    location="1034 LP Amsterdam (Banne Buiksloot)"
                    description="Furnished 1 bedroom apartment in the Banne. Within walking distance of Banne shopping center for ..."
                />
                <SearchCardItem 
                    src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Apartment Tuinbouwstraat 122"
                    price="1,450"
                    rooms="2"
                    area="68"
                    baths="1"
                    location=" 1097 ZA Amsterdam (Betondorp)"
                    description="Light and tastefully renovated apartment for rent in Amsterdam East! The house with unobstructed .... Layout:
                    Entrance is on the 1st floor. Internal stairs to the 2nd floor."
                />
                <SearchCardItem 
                    src="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Apartment Henrick de Keijserstraat"
                    price="5000"
                    rooms="6"
                    area="45"
                    baths="2"
                    location="9723 DR Groningen (De Meeuwen)"
                    description="This nice apartment is easily accessible with many amenities nearby. Situated within cycling distance of the center of The Hague, walking distance from a supermarket, and close to highways. Layout:
                    Entrance is on the 1st floor. Internal stairs to the 2nd floor."
                />
                <SearchCardItem 
                    src="https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Apartment Henrick de Keijserstraat"
                    price="1,300"
                    rooms="6"
                    area="45"
                    baths="2"
                    location="9723 DR Groningen (De Meeuwen)"
                    description="This nice apartment is easily accessible with many amenities nearby. Situated within cycling distance of the center of The Hague, walking distance from a supermarket, and close to highways. Layout:
                    Entrance is on the 1st floor. Internal stairs to the 2nd floor."
                />
            </div>
        </div>
    )
}
