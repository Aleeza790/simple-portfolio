import Link from "next/link";

export default function About() {
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
            <h3 className="about-title">About Me</h3>
            <div className="about-container">
                <h4><b>Name: Aleez</b></h4>
                <h4><b>Father&apos;s name: Sadiq Ali Khan</b></h4> {/* Updated to escape the apostrophe */}
                <h4><b>Nationality: Pakistani</b></h4>
                <h4><b>Date of birth: 6-May-2006</b></h4>
                <h4><b>Religion: Islam</b></h4>
            </div>
        </div>
    );
}
