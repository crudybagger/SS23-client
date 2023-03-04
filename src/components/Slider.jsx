import React from 'react'
import { useEffect, useRef } from 'react';

export const Slider = () => {
    const sliderRef = useRef(null);
    // let scrollTimer = null;
    useEffect(() => {
        const slider = sliderRef.current;

        if(!slider) return;
        // const images = slider.querySelectorAll('.image');
        // images.forEach((image,index) => {
        //     image.style.backgroundImage = `url("./images/${index+1}.jpg")`;
        // });
        let scrollTimer;

        const handleScroll = () => {
            console.log(slider.scrollLeft);
            if (scrollTimer) {
                window.cancelAnimationFrame(scrollTimer);
            }
            scrollTimer = window.requestAnimationFrame(() => {
                    const scrollAmount = slider.scrollLeft;
                    const maxScroll = slider.scrollWidth - slider.clientWidth;
                    const percentScrolled = scrollAmount / maxScroll;
                    const offset = percentScrolled * 100;
                    // console.log(slider.style.backgroundImage);
                    slider.style.backgroundPosition = `${offset*3}% 50%`;
                    // snap the slider to the nearest image;
                    // slider.childNodes[0].childNodes.forEach((section, index) => {
                    //     section = section.childNodes[0];
                    //     // console.log(section)
                    //     // const speed = (index - 2) * 0.25;
                    //     // const offset = percentScrolled * speed * 100;
                    //     section.style.backgroundPosition = `${offset}% center`;
                    // });
            });
        };
    
        slider.addEventListener('scroll', handleScroll);

        slider.querySelectorAll('.card').forEach((image, index) => {
            image.style.backgroundImage = `url("./images/${index + 1}.jpg")`;
        });

        return () => {
            slider.removeEventListener('scroll', handleScroll);
            window.cancelAnimationFrame(scrollTimer);
        }
    }, [sliderRef]);
    return (
        //Return a react component with class slider, and a div with class slider-inner, which has 5 divs with class image
        
        <div className='main'>
            <h1>Slider</h1>
            <div className="slider" ref={sliderRef}>
                <div className="slider-inner">
                    <div className="slider-item">
                        <div className="card"></div>
                    </div>
                    <div className="slider-item">
                        <div className="card"></div>
                    </div>
                    <div className="slider-item">
                        <div className="card"></div>
                    </div>
                    <div className="slider-item">
                        <div className="card"></div>
                    </div>
                    <div className="slider-item">
                        <div className="card"></div>
                    </div>
                </div>
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