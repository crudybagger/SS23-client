import React from 'react';
import '../stylesheets/Slider.css';

import { useEffect, useRef } from 'react';
export const Slider = ({children}) => {
    const sliderRef = useRef(null);
    useEffect(() => {
        const slider = sliderRef.current;
        if(!slider) return;
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
                    slider.style.backgroundPosition = `${offset*3}% 50%`;
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
        <div className="slider" ref={sliderRef}>
            {
                children.map((child, index) => {
                    return (
                        <div className="slider-item">
                            <div className="card">
                                {child || null}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}