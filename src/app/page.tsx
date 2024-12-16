import Link from "next/link";

export default function Home() {
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
      <h3 className="home-title">Home Page</h3>
      <h1 className="welcome-title"><b>---WELCOME TO MY PORTFOLIO---</b></h1>
    </div>
  );
}


