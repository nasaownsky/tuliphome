import React from "react"

import Header from "./header"
import Hero from "./hero"
import useViewportUnits from "../utils/useViewportUnits"

import "./layout.scss"

import signImg from "../assets/images/sign.webp"

const Layout = ({ children, hero }) => {
  const vh = useViewportUnits()
  const containerHeight = `${vh * 100 - 20}px`

  return (
    <div
      className="container"
      style={vh > 6.66 ? { height: containerHeight, minHeight: "inherit" } : {}}
    >
      <Header
        menu={[
          { title: "Главная", url: "/" },
          { title: "Тюльпаны", url: "/tulips" },
          { title: "О нас", url: "/about" },
          { title: "Галерея", url: "/gallery" },
          { title: "Контакты", url: "/contacts" },
        ]}
      />

      {hero && <Hero />}
      {children && <main>{children}</main>}
      {hero && (
        <footer>
          <a
            className="sign"
            href="https://github.com/nasaownsky"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => console.log("Thank you for visiting Me!")}
          >
            <img src={signImg} alt="Sign" />
          </a>
        </footer>
      )}
      {!hero && (
        <footer>
          <section>
            А1: <a href="tel:+375297226226">+375 29 7-226-226</a>
          </section>
          <section>Naš Ciuĺpan © {new Date().getFullYear()}</section>
        </footer>
      )}
    </div>
  )
}

export default Layout
