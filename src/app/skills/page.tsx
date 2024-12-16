import Link from "next/link";

export default function Skills() {
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
            <h3 className="skills-title">Skills</h3>
            <div className="skills-container">
                <ul>
                    <li><b>HTML</b></li>
                    <li><b>CSS</b></li>
                    <li><b>TypeScript</b></li>
                    <li><b>JavaScript</b></li>
                    <li><b>Next.Js</b></li>
                    <li><b>MS Office</b></li>
                </ul>
            </div>
        </div>
    );
}
