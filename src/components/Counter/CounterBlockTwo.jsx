import React, { useEffect, useState } from 'react';

const CounterBlockTwo = ({ iconClass, count, title, delay }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        let interval;
        if (currentCount < count) {
            interval = setInterval(() => {
                setCurrentCount(prevCount => prevCount + 1);
            }, 3000 / count);
        }

        return () => clearInterval(interval);
    }, [count, currentCount]);

    return (
        <div className="counter-block-two col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={delay}>
            <div className="inner">
                <i className={`icon ${iconClass}`}></i>
                <div className="count-box">
                    <span className="count-text">{currentCount}+</span>
                </div>
                <h6 className="counter-title px-5">{title}</h6>
            </div>
        </div>
    );
};


export default CounterBlockTwo;