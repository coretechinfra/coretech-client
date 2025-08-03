import React, { useState } from 'react';
import './Accordion.css';

const accordionData = [
    {
        title: "Is my technology allowed on tech?",
        content: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
    },
    {
        title: "How to soft launch your business?",
        content: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
    },
    {
        title: "How to turn visitors into contributors",
        content: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
    },
    {
        title: "How can i find my solutions?",
        content: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable."
    }
];


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            // If the clicked accordion is already active, close it
            setActiveIndex(null);
        } else {
            // Otherwise, open the clicked accordion
            setActiveIndex(index);
        }
    };

    return (
        <>
            <div className="container">
                <ul className="accordion-box wow fadeInRight">
                    {/* Map through the accordion items */}
                    {accordionData.map((item, index) => (
                        <li className={`accordion block ${index === activeIndex ? 'active-block' : ''}`} key={index}>
                            <div className="acc-btn" onClick={() => toggleAccordion(index)}>
                                {item.title}
                                <div className={`icon fa ${index === activeIndex ? 'fa-minus' : 'fa-plus'}`}></div>
                            </div>
                            <div className={`acc-content ${index === activeIndex ? 'current' : ''}`}>
                                <div className="content">
                                    <div className="text">{item.content}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Accordion;
