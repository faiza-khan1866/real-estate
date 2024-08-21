import React from "react";
import "./Privacy.scss"

const Privacy = (props) => (
    <div className="privacy">
        <div className="container">
            <div>
                <h2 className={"title"}>
                    {props?.privacyData?.title}
                    {/* Privacy Policy */}
                </h2>
                <p className="privacyDiv"
                    dangerouslySetInnerHTML={{
                        __html: props?.privacyData?.content
                    }}
                >
                    {/* Makeen Properties is committed to reserving the privacy of your personal information provided while you are browsing our web site. */}
                </p>
                {/* <h2>PRIVACY POLICY PROMISE</h2>
                <p>
                    The information on our website is to provide you with the required information to provide you with the best brief of Makeen’s superior service, yet our most important asset is our clients’ trust. We ensure that you information is secure with us, and only used as our clients would want, your privacy is our top priority.
                </p>
                <h2>WE PROMISE YOU TO:</h2>
                <p>
                    Securely safeguard, according to strict standards of security and confidentiality, any information shared with us.
                </p>
                <p>
                    We will collect and utilize customer information only to the extent necessary to provide superior service to our customers, including informing them about our products, services, and other opportunities, as well as to run our business.
                </p>
                <p>
                    Only authorized employees who have been trained on proper management of client information will be able to access it.
                </p>
                <p>
                    Employees who breach our Privacy Promise will face our standard disciplinary procedures.
                </p>
                <p>
                    We shall not disclose customer information to any third parties unless we have previously informed the customer through disclosures or agreements, or unless we are obligated by law to do so.
                </p>
                <h2>INFORMATION WE COLLECT</h2>
                <p>
                    We may gather personally identifiable information from registration forms, such as your name, address, phone number, e-mail address, and computer information.
                </p>
                <p>
                    In exceptional cases where it is required to enforce our Terms of Use, we may disclose and use personally identifiable information (for example, when necessary to protect our intellectual property rights). When we believe, in good faith, that the law demands it, we may also disclose or utilize your personal information.
                </p>
                <h2>POLICY MODIFICATIONS</h2>
                <p>
                    This Privacy Policy may be updated from time to time. Any changes will be posted here, so be sure to visit the policy periodically.
                </p>
                <h2>COMMENTS AND QUESTIONS</h2>
                <p>
                    Please do contact us if you have any questions, comments, or concerns regarding our Privacy Policy.
                </p> */}
            </div>
        </div>
    </div>
);

export default Privacy;
