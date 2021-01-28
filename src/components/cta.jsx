import { Button, IconButton, Tooltip, TextField, Link } from "@material-ui/core"
import {
  ArrowDownwardRounded,
  Instagram,
  ShareRounded,
} from "@material-ui/icons"
import React from "react"

const Cta = props => {
  const [cost, setCost] = React.useState(612)

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

  const Scroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    })
  }

  const Calc = (value, result) => {
    if (value < 5000) {
      result = value * 1.20
    } else if (value < 10000) {
      result = value * 1.15
    } else if (value < 15000) {
      result = value * 1.10
    } else {
      result = value * 1.10
    }

    setCost(result)
  }

  return (
    <div className="cta">
      <div className="content">
        <h1>Тюльпаны оптом</h1>
        <p>
          Заказать к 8 марта в Пинске и Беларуси. Цена от <b>1.10 BYN</b> за
          штуку. <br />
          &gt; Цветок 45-55 см, бокал 6-9 см <br />
          &gt; Собственное производство <br />
          &gt; Малый опт от 500 штук <br />
          Звоните:{" "}
          <Link underline="none" color="secondary" href="tel:+375336834818">
            МТС +375 33 683-48-18
          </Link>
          {" "}или{" "}
          <Link underline="none" color="secondary" href="tel:+375296429177">
            А1 +375 29 642-91-77
          </Link>
        </p>
        <div className="prices">
          <span className="cost">
            ~{" "}
            {new Intl.NumberFormat("en", {
              style: "currency",
              currency: "BYN",
            }).format(cost)}{" "}
          </span>
          <span>
            <TextField
              defaultValue={510}
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
                min: 510,
                max: 35000,
                maxLength: 5,
                inputMode: "numeric",
              }}
            />
          </span>
          {/* <Button
            className="button"
            variant="contained"
            color="primary"
            size="large"
          >
            Купить
          </Button> */}
        </div>
        <br />
        <Tooltip title="Поделиться">
          <IconButton onClick={() => Share()}>
            <ShareRounded />
          </IconButton>
        </Tooltip>
        {/* <IconButton onClick={() => Scroll()} className="scroll-arrow">
          <ArrowDownwardRounded />
        </IconButton> */}
        <a href="https://www.instagram.com/nash_tulpan/" target="_blank">
          <IconButton>
            <Instagram />
          </IconButton>
        </a>
      </div>
    </div>
  )
}

export default Cta
