import Link from "next/link";
import "./header.scss"
export default function Header() {
  return <>
    <header>
    <nav>
        <ul class='nav-bar'>
            <li class='logo'><Link href='/'><img src='/img/logo-white.svg'/></Link></li>
            <input type='checkbox' id='check' />
            <span class="menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/uses">Uses</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <label for="check" class="close-menu"><i class="bi bi-x-lg"></i></label>
            </span>
            <label for="check" class="open-menu"><i class="bi bi-list"></i></label>
        </ul>
    </nav>
    </header>
      
   </>;
}
