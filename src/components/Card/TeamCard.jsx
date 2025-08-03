import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({data}) => {
    return (
        <>
            <div class="team-block-two col-lg-3 col-md-4 col-sm-12">
                <div class="inner-box">
                    <div class="image-box mb-3">
                        <figure class="image"><Link to="#"><img src={data?.profileImage} alt="" className='w-100'/></Link></figure>
                        {/* <div class="social-links">
                            <Link to="#" target='_blank'><i class="fab fa-twitter"></i></Link>
                            <Link to="#" target='_blank'><i class="fab fa-facebook-f"></i></Link>
                            <Link to="#" target='_blank'><i class="fab fa-linkedin"></i></Link>
                            <Link to="#" target='_blank'><i class="fab fa-instagram"></i></Link>
                        </div>
                        <span class="share-icon fa fa-plus"></span> */}
                    </div>
                    <div class="info-box">
                        <h4 class="name"><Link href="#">{data?.name}</Link></h4>
                        <span class="designation">{data?.jobTitle}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard;