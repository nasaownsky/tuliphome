import React from "react"
import { Link } from "gatsby"
import { IconButton, Drawer } from "@material-ui/core"
import { MenuRounded } from "@material-ui/icons"

import logoImg from "../assets/images/logo.webp"

const Header = ({ menu }) => {
  const [isOpen, setOpen] = React.useState(false)

  const nav = (
    <>
      {menu.map((item, index) => {
        return (
          <Link
            className={`menu-link`}
            activeClassName="menu-link--active"
            key={index}
            to={item.url}
          >
            {item.title}
          </Link>
        )
      })}
    </>
  )

  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src={logoImg} alt="Naš Ciuĺpan" placeholder="none" />
      </Link>
      <nav className="menu desktop">{nav}</nav>

      <IconButton className="hamburger" onClick={() => setOpen(true)}>
        <MenuRounded />
      </IconButton>
      <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
        <nav className="menu">{nav}</nav>
      </Drawer>
    </header>
  )
}

export default Header
