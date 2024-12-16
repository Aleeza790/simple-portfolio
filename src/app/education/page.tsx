import Link from "next/link";

export default function Education() {
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
            <h3 className="education-title">Education</h3>
            <div className="education-container">
                <h4>
                   <b>1. Matriculation in Science from Board of Sindh Education Karachi with 87% </b>
                  <b>2. Intermediate in Science from Board of Intermediate Education Karachi with 65% <br /></b>  
                    <b>3. Bachelor in Education from Karachi University (ongoing).</b>
                </h4>
            </div>
        </div>
    );
}
