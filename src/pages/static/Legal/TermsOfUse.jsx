import React, { useEffect } from 'react';

const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="container my-5">

            <div className="mb-4 ">
                <h1 className="text-center">Terms of Use</h1>
                <p className='text-center text-primary'><strong>Effective from:</strong> 11th May, 2024</p>
            </div>
            <h4>1. Introduction</h4>
            <p>Welcome to Coretech Infrastructure Solutions, Inc. By accessing our website at www.coretechinfra.com, you agree to be bound by these terms and conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h4>2. Use License</h4>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Coretech’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Coretech's website; remove any copyright or other proprietary notations from the materials; transfer the materials to another person or "mirror" the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Coretech at any time.</p>

            <h4>3. Disclaimer</h4>
            <p>The materials on Coretech's website are provided on an 'as is' basis. Coretech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h4>4. Limitations</h4>
            <p>In no event shall Coretech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Coretech's website, even if Coretech or a Coretech authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h4>5. Accuracy of Materials</h4>
            <p>The materials appearing on Coretech's website could include technical, typographical, or photographic errors. Coretech does not warrant that any of the materials on its website are accurate, complete or current. Coretech may make changes to the materials contained on its website at any time without notice. However, Coretech does not make any commitment to update the materials.</p>

            <h4>6. Links</h4>
            <p>Coretech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Coretech of the site. Use of any such linked website is at the user's own risk.</p>

            <h4>7. Modifications</h4>
            <p>Coretech may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

            <h4>8. Governing Law</h4>
            <p>These terms and conditions are governed by and construed in accordance with the laws of Texas, United States of America and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

            <h4>9. Contact Us</h4>
            <p>If you have any questions about these Terms, please contact us at +1 (945) 278 5774.</p>
            <div className="my-3">
                <p className="text-md-right text-primary"><strong>Updated on:</strong> 11th May, 2024</p>
            </div>
        </div>
    );
}

export default TermsOfUse;
