//react component App
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useRef } from 'react';

const App = () => {
    const sliderRef = useRef(null);
    const slideLeft = () => {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
    const slideRight = () => {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
    //set the style of each div with class image to have a background image url
    const slider = sliderRef.current;
    const images = slider.querySelectorAll('.image');
    images.forEach(image => {
        image.style.backgroundImage = `url(https://picsum.photos/500/300?random=${Math.random()})`;
    });

    return (
        //Return a react component with class slider, and a div with class slider-inner, which has 5 divs with class image
        <div className="slider">
            <div className="slider-inner">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
            </div>
        </div>
        // <Router>
        // <Switch>
        //     <Route exact path="/" component={Home} />
        //     <Route path="/about" component={About} />
        //     <Route path="/contact" component={Contact} />
        // </Switch>
        // </Router>
    );
}

export default App;