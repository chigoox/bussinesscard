import React from 'react';
import Header from './Header';
import Button from './Buttons';
import About from './About';
import Interest from './Interests';
import Footer from './Footer';


export default function App(){
    return(
        <div className="backGround">
            <Header />
            <Button />
            <div className="infoSection">             
                <About />
                <Interest />
            </div>
            <Footer />
        </div>

    )

}