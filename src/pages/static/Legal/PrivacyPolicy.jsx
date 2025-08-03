import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="container my-5 p-4" style={{ userSelect: 'none' }}>
            <div className="row">
                <div className="col">
                    <div className="mb-4 ">
                        <h1 className='text-center'>Privacy Policy for Coretech's Website</h1>
                        <p className='text-center text-primary'><strong>Effective from:</strong> 11th May, 2024</p>
                    </div>

                    <h4 className="mt-4">1. Introduction</h4>
                    <p>Welcome to Coretech Infrastructure Solutions, Inc. We are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information through the use of our website www.coretechinfra.com, and any related services, sales, marketing, or events.</p>
                    <h4 className="mt-4">2. Information We Collect</h4>
                    <p><strong>Personal Information:</strong> This includes information that can be used to identify you personally, such as your name, email address, postal address, phone number, etc., which you provide us when you use our services or register for an account.</p>
                    <p><strong>Non-personal Information:</strong> We also collect data that does not identify you specifically, such as your browser type, language preference, and the date and time of your visit.</p>
                    <h4 className="mt-4">3. How We Use Your Information</h4>
                    <p>To provide and maintain our services</p>
                    <p>To notify you about changes to our services</p>
                    <p>To allow you to participate in interactive features when you choose to do so</p>
                    <p>To provide customer support</p>
                    <p>To gather analysis or valuable information so that we can improve our services</p>
                    <p>To monitor the usage of our services</p>
                    <p>To detect, prevent, and address technical issues</p>
                    <h4 className="mt-4">4. Sharing Your Information</h4>
                    <p>We do not share your personal information with third parties except as necessary to fulfill our business purposes, including but not limited to complying with the law, providing you with services, protecting our rights, or completing business transactions.</p>
                    <h4 className="mt-4">5. Security of Your Information</h4>
                    <p>We take reasonable precautions to protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
                    <h4 className="mt-4">6. Your Privacy Rights</h4>
                    <p>Depending on your location, you may have certain rights under applicable data protection laws, including the right to access, correct, or delete the personal information we collect about you.</p>
                    <h4 className="mt-4">7. Cookies and Tracking Technologies</h4>
                    <p>We use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                    <h4 className="mt-4">8. Changes to This Privacy Policy</h4>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                    <h4 className="mt-4">9. Contact Us</h4>
                    <p>If you have any questions about this Privacy Policy, please contact us at +1 (945) 278 5774.</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
