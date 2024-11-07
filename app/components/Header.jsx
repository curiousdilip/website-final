import Link from "next/link";
import "./header.scss"
export default function Header() {
  return <>
    <header>
    <nav>
        <ul className='nav-bar'>
            <li className='logo'><Link href='/'><img src='/img/logo-white.svg'/></Link></li>
            <input type='checkbox' id='check' />
            <span className="menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/uses">Uses</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <label for="check" className="close-menu"><i className="bi bi-x-lg"></i></label>
            </span>
            <label for="check" className="open-menu"><i className="bi bi-list"></i></label>
        </ul>
    </nav>
    </header>
      
   </>;
}
