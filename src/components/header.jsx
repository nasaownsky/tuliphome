import React from "react"
import { IconButton, Badge, Tooltip, Drawer } from "@material-ui/core"
import {
  ArrowBackRounded,
  LocalMallOutlined,
  MenuRounded,
} from "@material-ui/icons"

import logo from "../images/logo.png"

class Header extends React.Component {
  state = {
    isScroll: false,
    drawer: false,
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      this.setState({ isScroll: window.scrollY > 10 })
    })
  }

  ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    this.setState({ drawer: open })
  }

  render() {
    const { menu } = this.props
    const nav = (
      <>
        {menu.map((item, index) => (
          <a key={index} href="/">
            {item}
          </a>
        ))}
      </>
    )
    return (
      <header className={this.state.isScroll ? "header sticky" : "header"}>
        {/* <Tooltip title="Наверх">
          <IconButton onClick={this.ScrollTop}>
            <ArrowBackRounded />
          </IconButton>
        </Tooltip> */}
        <div className="logo">
          <img src={logo} />
        </div>
        <IconButton
          className="display"
          onClick={this.toggleDrawer(true)}
        >
          <MenuRounded />
        </IconButton>
        <Drawer
          anchor="top"
          open={this.state.drawer}
          onClose={this.toggleDrawer(false)}
        >
          <nav className="menu">{nav}</nav>
        </Drawer>
        <nav className="menu desktop">{nav}</nav>
        <Tooltip title="Корзина">
          <IconButton aria-label="cart">
            <Badge color="secondary" badgeContent={1}>
              <LocalMallOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
      </header>
    )
  }
}

export default Header
