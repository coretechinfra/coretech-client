import React, { useEffect } from 'react'
import "../Training.css";
import { FaBook, FaCheckCircle, FaClipboard, FaClock, FaPlus, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroTwo from '../../../../components/Hero/HeroTwo';

const CyberSecurityTraining = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <HeroTwo
                heading="Become a Cybersecurity Expert"
                description="Sharpen your skills and launch your cybersecurity career with our comprehensive training programs"
                imgSrc="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/service/cyber-security.png"
                link="https://forms.office.com/pages/responsepage.aspx?id=W6tuGsfFYkWKTMDLiMweuWfF1Irzc7ZJu6YLiG8esd1UQldKWjc4SDNNRDgzQVFDVFlOVUwxQUFTTC4u"
                linkText="Enroll Now"
                linkTarget="_blank"
            />


            <section className="training-featured">
                <div className="container">
                    {/* <h2>What's included?</h2> */}
                    <div className="row border rounded-4 bg-light ">
                        <div className="training-featured-column col p-2">
                            <div className="inner-box p-4 rounded-4">
                                <FaBook />
                                <h5>Modules</h5>
                                <p>3 Modules</p>
                            </div>
                        </div>
                        <div className="training-featured-column col p-2">
                            <div className="inner-box p-4 rounded-4">
                                <FaClock />
                                <h5>Duration</h5>
                                <p>170 Hours</p>
                            </div>
                        </div>
                        <div className="training-featured-column col p-2">
                            <div className="inner-box p-4 rounded-4">
                                <FaClipboard />
                                <h5>Practical Exam</h5>
                                <p>6 Hours</p>
                            </div>
                        </div>
                        <div className="training-featured-column col p-2">
                            <div className="inner-box p-4 rounded-4">
                                <FaClipboard />
                                <h5>Mock Interview</h5>
                                <p>4 Hours</p>
                            </div>
                        </div>
                        <div className="training-featured-column col p-2">
                            <div className="inner-box p-4 rounded-4">
                                <FaPlus />
                                <h5>Add-Ons</h5>
                                <p>4 Hours</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="course-description-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* <h2 className='mb-3'>Overview</h2> */}
                            <div class="sec-title">
                                <span class="sub-title">Overview</span>
                                <h2>Cyber Security Professional Training Program</h2>
                            </div>
                            <p>
                                Are you ready to step into the world of cybersecurity and become a proficient ethical hacker? Our comprehensive Ethical Hacking and Bug Bounty Training program is designed to equip you with the knowledge and skills needed to protect organizations from cyber threats and vulnerabilities.
                            </p>

                        </div>
                        <div className="col">
                            <img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/cyber-security-thumbnail.png" alt="" className='w-100 rounded-4' />
                        </div>
                    </div>

                </div>
            </section>

            <section className="course-details">
                <div className="container">
                    <div class="sec-title text-center">
                        <span class="sub-title">Course Details</span>
                        <h2>Know more about</h2>
                    </div>

                    <div className="row">
                        <div className="col">
                            {/* Learning Outcomes */}
                            <div className="section">
                                <h3 >Learning Outcomes</h3>
                                <ul className='custom-list'>
                                    <li><FaCheckCircle className="icon" />Understand the principles and methodologies of ethical hacking and penetration testing.</li>
                                    <li><FaCheckCircle className="icon" />Master the tools and techniques used by ethical hackers to assess and secure network infrastructure, web applications, and systems.</li>
                                    <li><FaCheckCircle className="icon" />Identify and exploit common security vulnerabilities, such as SQL injection, cross-site scripting (XSS), and buffer overflows.</li>
                                    <li><FaCheckCircle className="icon" />Gain practical experience through hands-on labs, capture-the-flag (CTF) exercises, and real-world bug bounty hunting scenarios.</li>
                                    <li><FaCheckCircle className="icon" />Prepare for industry-recognized certifications such as Certified Ethical Hacker (CEH), Offensive Security Certified Professional (OSCP), and more.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col px-3">
                            {/* Prerequisites */}
                            <div className="section mb-5">
                                <h3>Prerequisites</h3>
                                <p><FaCheckCircle className="icon" />Basic understanding of computer networks, operating systems, and programming concepts is recommended. </p>
                                <p><FaCheckCircle className="icon" />No prior cybersecurity experience is required.</p>
                            </div>

                            {/* Who Should Attend */}
                            <div className="section">
                                <h3>Who Should Attend</h3>
                                <p><FaCheckCircle className="icon" />This course is ideal for aspiring cybersecurity professionals, IT professionals, software developers, and anyone interested in pursuing a career in ethical hacking, penetration testing, or bug bounty hunting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="course-modules-section">
                <div className="container">

                    <div class="sec-title ">
                        <span class="sub-title">3 Modules • 170 Hours</span>
                        <h2>Modules In This Training</h2>
                    </div>

                    <div className="course-modules-list">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className='module-title'>
                                            <p>Module 1 - 60 Hours</p>
                                            <h4>Introduction to Ethical Hacking</h4>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body p-5">
                                        <p className=''>In this module, we will embark on a journey to explore the fundamental concepts and methodologies of ethical hacking. Ethical hacking, also known as penetration testing or white-hat hacking, is the practice of identifying and addressing security vulnerabilities in computer systems, networks, and applications with the permission of the system owner.</p>

                                        <h5>Module Overview:</h5>
                                        <ol className='custom-list-disc'>
                                            <li>
                                                <strong>Reconnaissance:</strong> We will begin by learning the importance of reconnaissance in the ethical hacking process. You will discover various techniques and tools used to gather information about target systems, such as footprinting, scanning, and enumeration.
                                            </li>
                                            <li>
                                                <strong>Scanning:</strong> Next, we will delve into the scanning phase, where you will learn how to identify active hosts, open ports, and services running on target systems. You will explore popular scanning tools like Nmap and understand how to interpret scan results to assess system vulnerabilities.
                                            </li>
                                            <li>
                                                <strong>Enumeration:</strong> Building upon the scanning phase, you will explore enumeration techniques to gather additional information about target systems, such as user accounts, shares, and network resources. You will learn how to leverage enumeration results to identify potential security weaknesses.
                                            </li>
                                            <li>
                                                <strong>Exploitation Techniques:</strong> Finally, we will cover exploitation techniques, where you will learn how to exploit identified vulnerabilities to gain unauthorized access to target systems. You will explore common exploitation methods, including buffer overflow attacks, SQL injection, cross-site scripting (XSS), and more.
                                            </li>
                                        </ol>

                                        <h5>Key Learning Objectives:</h5>
                                        <ul className=''>
                                            <li>
                                                Understand the ethical hacking process and its significance in modern cybersecurity.
                                            </li>
                                            <li>
                                                Learn reconnaissance techniques to gather information about target systems and networks.
                                            </li>
                                            <li>
                                                Explore scanning methodologies to identify active hosts and open ports.
                                            </li>
                                            <li>
                                                Master enumeration techniques to gather detailed information about target systems.
                                            </li>
                                            <li>
                                                Gain hands-on experience with exploitation techniques to exploit identified vulnerabilities responsibly.
                                            </li>
                                        </ul>

                                        <h5>Practical Application:</h5>
                                        <p>
                                            Throughout this module, you will have the opportunity to apply theoretical concepts in practical scenarios through hands-on labs and simulated exercises. You will utilize industry-standard tools and techniques to perform reconnaissance, scanning, enumeration, and exploitation tasks in a controlled environment.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className='module-title'>
                                            <p>Module 2 - 80 Hours</p>
                                            <h4>Advanced Penetration Testing</h4>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body p-5">
                                        <p className=''>
                                            Welcome to the Advanced Penetration Testing module, where we take your cybersecurity skills to the next level. In this module, we will delve deeper into advanced penetration testing methodologies, equipping you with the knowledge and techniques necessary to identify and mitigate complex security vulnerabilities across various environments.
                                        </p>

                                        <h5>Module Overview:</h5>
                                        <ul>
                                            <li>
                                                <strong>Network Penetration Testing:</strong> We will start by exploring advanced techniques for assessing the security of network infrastructure. You will learn how to conduct comprehensive network penetration tests to identify weaknesses in network devices, protocols, and configurations. Topics covered include port scanning, vulnerability scanning, and exploitation of network-based vulnerabilities.
                                            </li>
                                            <li>
                                                <strong>Web Application Testing:</strong> Next, we will shift our focus to web application security testing. You will learn how to assess the security posture of web applications by identifying common vulnerabilities such as SQL injection, cross-site scripting (XSS), and insecure authentication mechanisms. You will gain hands-on experience using tools like Burp Suite and OWASP ZAP to perform web application penetration tests and exploit vulnerabilities effectively.
                                            </li>
                                            <li>
                                                <strong>Wireless Network Security:</strong> In this section, we will explore the unique challenges associated with securing wireless networks. You will learn how to conduct wireless penetration tests to assess the security of Wi-Fi networks, identify misconfigurations, and exploit vulnerabilities such as weak encryption protocols and rogue access points. You will also gain an understanding of countermeasures to enhance wireless network security.
                                            </li>
                                            <li>
                                                <strong>Social Engineering:</strong> Social engineering is a critical aspect of penetration testing, involving the manipulation of human psychology to gain unauthorized access to sensitive information or systems. In this module, you will learn how to conduct social engineering attacks, including phishing, pretexting, and impersonation. You will explore techniques for crafting persuasive social engineering campaigns and mitigating the risks associated with social engineering attacks.
                                            </li>
                                        </ul>

                                        <h5>Key Learning Objectives:</h5>
                                        <ul className='' style={{
                                            listStyleType: 'disc !important'
                                        }}>
                                            <li>
                                                Understand advanced penetration testing methodologies for assessing network infrastructure, web applications, and wireless networks.
                                            </li>
                                            <li>
                                                Learn how to identify and exploit common vulnerabilities in network devices, web applications, and wireless networks.
                                            </li>
                                            <li>
                                                Gain practical experience using industry-standard tools and techniques for conducting penetration tests in a controlled environment.
                                            </li>
                                            <li>
                                                Develop skills in social engineering tactics and countermeasures to mitigate the risks of human-based attacks.
                                            </li>
                                        </ul>

                                        <h5>Practical Application:</h5>
                                        <p>
                                            Throughout this module, you will have the opportunity to apply advanced penetration testing techniques in practical scenarios through hands-on labs, simulated exercises, and real-world simulations. You will work with a variety of tools and technologies commonly used in penetration testing engagements, gaining valuable experience and insight into the challenges and complexities of real-world cybersecurity assessments.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div className='module-title'>
                                            <p>Module 3 - 30 Hours</p>
                                            <h4>Bug Bounty Hunting</h4>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body p-5">
                                        <p className=''>
                                            Welcome to the Bug Bounty Hunting module! In this module, you will learn how to identify and exploit security vulnerabilities responsibly, participate in bug bounty programs, and earn rewards for finding vulnerabilities in real-world applications.
                                        </p>

                                        <h5>Module Overview:</h5>
                                        <p>
                                            Bug bounty programs have become a popular way for organizations to crowdsource security testing and identify potential vulnerabilities in their systems and applications. In this module, you will gain insight into the world of bug bounty hunting and learn the skills and techniques needed to succeed as a bug bounty hunter.
                                        </p>

                                        <h5>Key Learning Objectives:</h5>
                                        <ul className=''>
                                            <li>
                                                Understand the concept of bug bounty programs and their role in modern cybersecurity.
                                            </li>
                                            <li>
                                                Learn how to identify and exploit security vulnerabilities in real-world applications.
                                            </li>
                                            <li>
                                                Gain practical experience participating in bug bounty programs and submitting vulnerability reports.
                                            </li>
                                            <li>
                                                Understand the responsible disclosure process and ethical considerations when participating in bug bounty programs.
                                            </li>
                                            <li>
                                                Learn strategies for maximizing your success as a bug bounty hunter and earning rewards for your findings.
                                            </li>
                                        </ul>

                                        <h5>Practical Application:</h5>
                                        <p>
                                            Throughout this module, you will have the opportunity to apply your bug bounty hunting skills in practical scenarios by participating in simulated bug bounty programs and conducting vulnerability assessments on real-world applications. You will learn how to identify common security vulnerabilities such as SQL injection, cross-site scripting (XSS), and authentication bypass, and submit detailed reports to program administrators.
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <section class="call-to-action">
                <div class="bg bg-pattern-8"></div>
                <div class="container">
                    <div class="outer-box wow fadeIn">
                        <div class="title-box">
                            <h1 class="title">Book your training today.</h1>
                            {/* <p>Take the first step towards a rewarding career in cybersecurity. <br/>Enroll in our Ethical Hacking and Bug Bounty Training program today <br/>and unleash your potential as a cybersecurity expert!</p> */}
                        </div>
                        <div class="btn-box">
                            <Link to="https://forms.office.com/pages/responsepage.aspx?id=W6tuGsfFYkWKTMDLiMweuWfF1Irzc7ZJu6YLiG8esd1UQldKWjc4SDNNRDgzQVFDVFlOVUwxQUFTTC4u" target='_blank' class="theme-btn btn-style-one light"><span class="btn-title">Enroll Now</span></Link>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default CyberSecurityTraining;