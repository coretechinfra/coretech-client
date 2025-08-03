import React, { useEffect, useState } from 'react';
import './TeamSection.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useGlobalContext } from '../../../global/context';

const TeamSection = () => {
    const { api} = useGlobalContext();
	const [teams, setTeams] = useState();

	const getTeams = async () => {
        try {
            const res = await api.get(`/api/team`);
            if (res?.status === 200) {
                console.log(res);
                setTeams(res?.data);
            }
           
        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

	useEffect(()=> {
		getTeams();	
	}, []);

    return (
        <section className="container-fluid team-section">
            <div className="container">
                <div className="client-slider-head">
                    <h4 className='fadeInLeft text-warning'>/ Team</h4>
                    <h1 className='fadeInUp text-white '>Meet our team</h1>
                </div>
                <div className="team-content">

                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/about/santosh.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Santosh Kushwaha</h3>
                            <p>Project Manager</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/user.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Kailash Nath</h3>
                            <p>CEO</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/user.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Meghana Satyanarayana</h3>
                            <p>HR Head</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/user.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Shalini Kumari</h3>
                            <p>Executive Sales Advisor</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                    
                </div>
                <div className="team-content">

                    
                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/user.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Vikram Varma</h3>
                            <p>Chief Information Security Officer</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/user.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Gayatri Kushwaha</h3>
                            <p>Chief Designer</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/user.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Dipak Gund</h3>
                            <p>Network & Firewall Expert</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="img">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/user.jpg" />
                        </div>
                        <div class="caption">
                            <h3>Himanshu Sahil</h3>
                            <p>System Engineer</p>
                            {/* <div class="social-links">
                                <FaFacebook />
                                <FaTwitter />
                                <FaInstagram />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection