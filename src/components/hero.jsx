import { Button, Chip } from "@material-ui/core"
import { Instagram, Phone, ShareRounded } from "@material-ui/icons"
import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  // const [cost, setCost] = React.useState(1300)

  const Share = () => {
    if (navigator.share !== undefined) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .then(() => console.log("Successful share! 🎉"))
        .catch(err => console.error(err))
    } else {
      window.location.href =
        "https://t.me/share/url?url=https://tuliphome.netlify.app/"
    }
  }

  // const Calc = (value, result) => {
  //   if (value < 5000) {
  //     result = value * 1.3
  //   } else {
  //     result = value * 1.3
  //   }

  //   setCost(result)
  // }

  return (
    <div className="hero">
      <StaticImage
        className="tulips"
        src="../assets/images/tulips.webp"
        alt="💐"
        loading="eager"
        placeholder="none"
        quality={100}
      />
      <div className="content">
        <h1>
          Мы выращиваем
          <br />
          Наш Тюльпан уже{" "}
          <span className="/serif">{new Date().getFullYear() - 2015}</span> лет
        </h1>
        <div className="description">
          У нас вы найдёте только отборный сортовой цветок собственного
          производства: исключительно <span>из голландской луковицы</span>,
          высотой <span>от 45 до 55 см</span> и размером бокала{" "}
          <span>от 6 до 9 см</span>, оптом <span>от 1000 штук</span> – в Пинске
          и Беларуси.
        </div>
        <div className="actions">
          {/* <div className="prices">
            <span className="cost">
              ~{" "}
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "BYN",
              }).format(cost)}{" "}
            </span>
            <span>
              <TextField
                defaultValue={1005}
                onChange={e => Calc(e.target.value)}
                type="number"
                placeholder="0"
                variant="outlined"
                label="штук"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 15,
                  min: 1005,
                  max: 35000,
                  maxLength: 5,
                  inputMode: "numeric",
                }}
              />
            </span>
          </div> */}
          <Link to="/tulips">
            <Button
              classes={{ root: "button" }}
              variant="contained"
              size="large"
            >
              Ассортимент
            </Button>
          </Link>
        </div>
        <div className="chips">
          <Chip
            component="a"
            label="A1: +375 29 7-226-226"
            icon={<Phone />}
            variant="outlined"
            clickable
            href="tel:+375297226226"
          />
          <Chip
            component="a"
            label="Мы в Instagram"
            icon={<Instagram />}
            variant="outlined"
            clickable
            href="https://www.instagram.com/nash_tulpan/"
            target="_blank"
            rel="noreferrer"
          />
          <Chip
            label="Поделиться"
            icon={<ShareRounded />}
            variant="outlined"
            onClick={() => Share()}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
