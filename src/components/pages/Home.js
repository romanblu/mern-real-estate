import React from 'react';
import HeroSection from '../HeroSection';
import FeaturedProperties from '../FeaturedProperties';
import Footer from '../Footer';
import SearchResults from '../SearchResults';

function Home() {
    return (
        <div>
            <HeroSection />
            <FeaturedProperties />
            <SearchResults />
            <Footer />
        </div>
    );
};

export default Home;
