"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from "./navlink.module.css"

const Navlink = ({ href, children }) => {
  const pathname = usePathname()

  return (
      <Link href={href} className={ pathname.startsWith(`${href}`) ? `${classes.link} ${classes.active}` : classes.link}>{ children}</Link>
  )
}

export default Navlink