import Link from 'next/link'
import Image from 'next/image'
import classes from "./mainheader.module.css"
import Navlink from './Navlink'

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src="/globe.svg" alt="logo" width={50} height={50} priority />
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/about">About</Navlink>
            </li>
            <li>
              <Navlink href="/country">Country</Navlink>
            </li>
            <li>
              <Navlink href="/services">Services</Navlink>
            </li>
            <li>
              <Navlink href="/contact">Contact</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader