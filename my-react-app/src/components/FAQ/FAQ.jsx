import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import './FAQ.css'
export default function App() {
    return (
        <div>
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
            </div>

            <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
                <MDBAccordion alwaysOpen initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle="On what devices can I access the course?">
                        The course can be accessed on any device with an active internet connection. However,
                        a laptop or PC will be required for attempting select projects and assignments.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle="For how long can I access the course after purchasing it?">
                        You will have access to complete learning material of the course for 1 year
                        from the date of purchase of the course.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle="What do I receive after completing a course?">
                        You will receive a soft copy of the certificate after successfully completing the course.
                        You can download this industry-recognized
                        certificate in the pdf format and share it within your network.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={4} headerTitle="I have made payment for the course but I still can not access it. What should I do?">
                        It may happen that there is a slight delay in your payment reflecting on our payment dashboard.
                        However, if your payment is not reflected even after 30 minutes, please write to us at <strong>support@studyX.com</strong>.
                        Mention: Not able to access (Name of the course) in the subject line.
                        Write your registered email id along with the screenshot of the payment receipt or transaction history in the email.
                        Once verified, we will update your payment status from the backend.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={5} headerTitle="Have an unresolved question?">
                        Please write to <strong>support@studyX.com</strong> with any further questions.
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBContainer>
        </div>
    );
}