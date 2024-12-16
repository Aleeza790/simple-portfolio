import Link from "next/link";

export default function Contact() {
    return (
        <div>
            <h4 className="simple-resume-header">Simple Resume</h4>
            <ul className="navigation-list">
                <Link href="/">
                    <li className="navigation-item">Home</li>
                </Link>
                <Link href="/about">
                    <li className="navigation-item">About</li>
                </Link>
                <Link href="/skills">
                    <li className="navigation-item">Skills</li>
                </Link>
                <Link href="/education">
                    <li className="navigation-item">Education</li>
                </Link>
                <Link href="/contact">
                    <li className="navigation-item">Contact</li>
                </Link>
            </ul>
            <h3 className="contact-title">Contact Us</h3>
            <div className="contact-container">
                <h4><i>Email: khanaleeza799@gmail.com</i></h4>
                <h4>Phone Numbers: 03198139002 | 03180101462</h4>
            </div>
        </div>
    );
}
