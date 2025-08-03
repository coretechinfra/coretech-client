import React from 'react'
import CounterBlockTwo from '../../../components/Counter/CounterBlockTwo';
import Slider from 'react-slick';
import { DockTwoTone } from '@mui/icons-material';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
   
    {
        "avatarUrl": "https://media.licdn.com/dms/image/C5603AQFyC70rNlW2gA/profile-displayphoto-shrink_200_200/0/1516782163460?e=1721260800&v=beta&t=QsXgCliu5usRYFTklYbwggGIcIAGDV-uJVP_SAph-J0",
        "name": "Sarah Adams",
        "designation": "IT Manager",
        "review": "We're extremely satisfied with Coretech Infrastructure Solutions Inc.'s cloud services. Their expertise in cloud computing helped us optimize our infrastructure for scalability and security while reducing operational costs.",
        "rating": 5
    },
    {
        "avatarUrl": "images/resource/thumb-3.jpg",
        "name": "Sophia Johnson",
        "designation": "Head of Development",
        "review": "Coretech Infrastructure Solutions Inc. provided us with top-notch development services. Their team's technical proficiency and commitment to quality resulted in innovative solutions that aligned perfectly with our business needs.",
        "rating": 5
    },
    {
        "avatarUrl": "https://media.licdn.com/dms/image/C4D03AQEkoxyz3u9GOg/profile-displayphoto-shrink_200_200/0/1613020863425?e=1721260800&v=beta&t=oSt91Sn06_m0Wb1oxfriMn_hrif3APazarskLT14Rso",
        "name": "David Wilson",
        "designation": "Operations Manager",
        "review": "Choosing Coretech Infrastructure Solutions Inc. for managed services was a game-changer for our organization. Their proactive approach and swift response to any issues ensured seamless IT operations, allowing us to focus on our core business.",
        "rating": 5
    },
    {
        "avatarUrl": "images/resource/thumb-2.jpg",
        "name": "Sunil Mehta",
        "designation": "CTO",
        "review": "We relied on Coretech Infrastructure Solutions Inc. for cyber security solutions, and they exceeded our expectations. Their proactive approach and expertise in the field ensured our digital assets remained protected.",
        "rating": 5
    },
    {
        "avatarUrl": "https://media.licdn.com/dms/image/D5603AQEzxz6aVfXnkw/profile-displayphoto-shrink_100_100/0/1675697170181?e=1721260800&v=beta&t=-K9mqnU1Ned5J_AetWBQQCaNNGc_raT3M2gliQwMiIc",
        "name": "Michael Brown",
        "designation": "Training Manager",
        "review": "The corporate training programs offered by Coretech Infrastructure Solutions Inc. were instrumental in enhancing our team's skills. Their tailored approach and comprehensive curriculum empowered us to tackle emerging IT challenges effectively.",
        "rating": 5
    },
  
    
];


const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="testimonial-section-three">
            <div className="container-fluid p-0">
                <div className="outer-box">
                    <div className="carousel-outer">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, i) => (
                                <div className="testimonial-block-three" key={i}>
                                    <div className="inner-box">
                                        <div className="thumb">
                                            {/* <img src={testimonial?.avatarUrl} alt="" /> */}
                                            {/* <span className="icon fa fa-quote-right"></span> */}
                                            <FaQuoteLeft style={{fontSize: '56px' , color: "blueviolet"}}/>
                                        </div>
                                        <div className="text">{testimonial?.review}</div>
                                        <h6 className="name">{testimonial?.name} <span className="designation"> - &nbsp; {testimonial?.designation}</span></h6>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="banner-box">
                            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/banner-1.jpg)' }}>
                                <h3 className='fs-1 fw-bold'>Our organization is <br />one of the most<br /> successful<br /> organization.</h3>
                                <a href="/about" className="theme-btn btn-style-one light"><span className="btn-title">Explore now</span></a>
                            </div>
                        </div>

                        <div className="fact-counter-two">
                            <div className="row">
                                <CounterBlockTwo iconClass="flaticon-reputation" count={10} title="Years of Experience" delay="0ms" />
                                <CounterBlockTwo iconClass="flaticon-coffee" count={300} title="Cup of Coffees" delay="300ms" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;