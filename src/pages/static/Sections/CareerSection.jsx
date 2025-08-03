import React from 'react'
import { Link } from 'react-router-dom';

const CareerSection = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container mb-5">
                    {/* <div className="sec-title text-center">
                        <span className="sub-title">Careers</span>
                        <h2>Work with us!</h2>
                    </div> */}
                    <div className="row row-cols-1 row-cols-md-2 align-items-center rounded-4" style={{backgroundColor: "#fef9db"}}>
                        <div className="col sec-title p-5">
                            <h2 className='mb-4'>Work with us!</h2>
                            <p className="text mb-4">
                                Give your career the opportunity to grow and thrive in a safe and pioneering environment focused on creating impact for customers and businesses.
                            </p>
                            <Link to="/career" className="theme-btn btn-style-one"><span className="btn-title">Find Opportunities</span></Link>
                        </div>
                        <div className="col">
                            <img src="https://img.freepik.com/free-vector/business-career-concept-with-ladder-goal-target-background_1017-45408.jpg?t=st=1715422831~exp=1715426431~hmac=619f8e09076c615f900dfe7292202a8d3f51d6f1f4f0715030f79dfc4fb98325&w=740" alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerSection;